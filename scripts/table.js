export default class Table {
    rounds = [];
    teams = [];

    teamIndex(teamName) {
        let index = -1;
        this.teams.forEach((team, i) => {
            if (team.name == teamName) index = i;
        })

        return index;
    }

    updateTeam(index, logo, score, scoreRival) {
        if (score == -1) return;
        this.teams[index].score += score;
        this.teams[index].matches += 1;
        const goalDiff = score - scoreRival;
        this.teams[index].goalDiff += goalDiff;
        this.teams[index].against += scoreRival;
        
        if(score > scoreRival) {
            this.teams[index].victory += 1;
            this.teams[index].points+= 3;
        } else if(score == scoreRival) {
            this.teams[index].draw += 1;
            this.teams[index].points+= 1;
        } else {
            this.teams[index].defeat += 1;
        }
    }
    
    createTeam(teamName, logo, score, scoreRival) {
        let victory = 0;
        let draw = 0;
        let defeat = 0;
        let goalDiff = 0;
        let realScore = 0;
        let matches = 0;
        let realScoreRival = 0;
        let points = 0;

        if (score != -1) {
            if(score > scoreRival) {
                victory += 1;
                points = 3;
            } else if(score == scoreRival) {
                draw += 1;
                points = 1;
            } else {
                defeat += 1;
                points = 0;
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
            goalDiff,
            logo,
            points
        })
    }

    makeRanking() {
        this.teams.sort((first, second) => {
            if (first.victory == second.victory) {
                if (second.score == first.score) {
                    return second.goalDiff - first.goalDiff;
                }

                return second.score - first.score;
            }


            return second.victory - first.victory; 
        })

        return this.teams;
    }
}