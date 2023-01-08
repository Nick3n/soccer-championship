import Storage from './storage.js';

export default class Teams {
    static get(teamId) {
        const teams = Storage.get("teams");
        console.log(teams);
        let teamReturn;
        teams.forEach(team => {
            if(team.id == teamId) {
                teamReturn = team;
            }
        })

        return teamReturn;
    }
}