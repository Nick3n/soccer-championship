import Table from "./table.js";

export default class TableNormal extends Table {
    rounds = [];
    teams = [];

    constructor(rounds) {
        super();
        rounds.forEach(round => {
            const matches = round.matches;
            matches.forEach(match => {
                const team1Index = this.teamIndex(match.team_1.name);
                if(team1Index == -1) {
                    this.createTeam(match.team_1.name, match.team_1.logo, match.team_1.score, match.team_2.score)
                } else {
                    this.updateTeam(team1Index, match.team_1.logo, match.team_1.score, match.team_2.score);
                }

                const team2Index = this.teamIndex(match.team_2.name);
                if(team2Index == -1) {
                    this.createTeam(match.team_2.name, match.team_2.logo, match.team_2.score, match.team_1.score)
                } else {
                    this.updateTeam(team2Index, match.team_2.logo, match.team_2.score, match.team_1.score);
                }
            })
        })

        this.makeRanking();

    }
}