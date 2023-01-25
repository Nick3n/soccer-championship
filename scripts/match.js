import Teams from './teams.js';

export default class Match {
    team1;
    team2;
    rec_url;
    score;

    constructor(match) {
        const team1 = Teams.get(match.team_1.id);
        this.team1 = {
            id: match.team_1.id,
            score: match.team_1.score,
            name: team1.name,
            logo: team1.logo
        };
        const team2 = Teams.get(match.team_2.id);
        this.team2 = {
            id: match.team_2.id,
            score: match.team_2.score,
            name: team2.name,
            logo: team2.logo
        };
        this.rec_url = match.rec_url;
        this.score = match.score;
    }

    get() {
        return {
            team_1: this.team1,
            team_2: this.team2,
            rec_url: this.rec_url,
            score: this.score
        }
    }
}