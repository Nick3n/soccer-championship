import Player from "./player.js";
import Storage from "./storage.js";

export default class Players {
    players = [];

    constructor(seasonId) {
        const season = Storage.get(seasonId)
        const players = season.players;
        players.forEach(player => {
            this.players.push(new Player(player));
        })
    }

    get() {
        return this.players;
    }
}