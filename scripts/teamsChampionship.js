import Players from "./players.js";
import Storage from "./storage.js";
import Teams from "./teams.js";

export default class teamsChampionship {
    teams = [];

    constructor(seasonId) {
        const season = Storage.get(seasonId)
        const teams = season.participant_teams;
        const players = new Players(seasonId);

        teams.forEach(team => {
            let teamObject = Teams.get(team);
            teamObject.players = [];

            players.get().forEach(player => {
                if (player.teamId == teamObject.id) {
                    teamObject.players.push(player);

                    if(player.captain == true) {
                        teamObject.captain = player;
                    }
                }
            })
            this.teams.push(teamObject);
        })
    }

    get() {
        return this.teams;
    }
}