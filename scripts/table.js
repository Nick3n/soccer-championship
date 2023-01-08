export default class Table {
    rounds = [];
    teams = [];

    constructor(rounds) {
        rounds.forEach(round => {
            const matches = round.matches;
            matches.forEach(match => {
                const team1Index = this.teamIndex(match.team_1.name);
                if(team1Index == -1) {
                    this.createTeam(match.team_1.name, match.team_1.score, match.team_2.score)
                } else {
                    this.updateTeam(team1Index, match.team_1.score, match.team_2.score);
                }

                const team2Index = this.teamIndex(match.team_2.name);
                if(team2Index == -1) {
                    this.createTeam(match.team_2.name, match.team_2.score, match.team_1.score)
                } else {
                    this.updateTeam(team2Index, match.team_2.score, match.team_1.score);
                }
            })
        })

        this.makeRanking();

    }

    teamIndex(teamName) {
        let index = -1;
        this.teams.forEach((team, i) => {
            if (team.name == teamName) index = i;
        })

        return index;
    }

    updateTeam(index, score, scoreRival) {
        if (score == -1) return;
        this.teams[index].score += score;
        this.teams[index].matches += 1;
        const goalDiff = score - scoreRival;
        this.teams[index].goalDiff += goalDiff;
        this.teams[index].against += scoreRival;
        
        if(score > scoreRival) {
            this.teams[index].victory += 1;
        } else if(score == scoreRival) {
            this.teams[index].draw += 1;
        } else {
            this.teams[index].defeat += 1;
        }
    }
    
    createTeam(teamName, score, scoreRival) {
        let victory = 0;
        let draw = 0;
        let defeat = 0;
        let goalDiff = 0;
        let realScore = 0;
        let matches = 0;
        let realScoreRival = 0;

        if (score != -1) {
            if(score > scoreRival) {
                victory += 1;
            } else if(score == scoreRival) {
                draw += 1;
            } else {
                defeat += 1;
            }
            goalDiff = score - scoreRival;
            realScore = score;
            matches = 1;
            realScoreRival = scoreRival;
        }


        this.teams.push({
            name: teamName,
            score: realScore,
            victory: victory,
            defeat: defeat,
            draw: draw,
            matches: matches,
            against: realScoreRival,
            goalDiff
        })
    }

    makeRanking() {
        this.teams.sort((first, second) => {
            if (second.victores == second.victores) {
                if (second.score == first.score) {
                    return second.goalDiff - first.goalDiff;
                }

                return second.score - first.score;
            }

            return second.victories - first.victories; 
        })

        return this.teams;
    }
}