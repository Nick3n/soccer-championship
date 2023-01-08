export default class Player {
    id;
    name;
    captain;
    discord;
    teamId;

    constructor(player) {
        this.id = player.id;
        this.name = player.name;
        this.captain = player.captain;
        this.discord = player.discord;
        this.teamId = player.teamId;
    }

    get() {
        return {
            id: this.id,
            name: this.name,
            captain: this.captain,
            discord: this.discord,
            teamId: this.teamId
        }
    }
}