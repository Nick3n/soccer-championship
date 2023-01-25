import Rounds from "./rounds.js";
import Season from "./season.js";
import Storage from "./storage.js";

export default class PlayersRanking {
    rounds = [];
    players = [];
    championship;

    constructor(championshipId) {
        const championship = new Season(championshipId);
        this.championship = championship;
        const rounds = new Rounds(championshipId);
        this.rounds = rounds.rounds;
        this.setPlayersInfo();
    }

    setPlayersInfo() {
        this.rounds.forEach(round => {
            round.matches.forEach(match => {
                console.log(match);
                match.score.forEach(player => {
                    const playerId = player.player_id;
                    if(!this.players[playerId]) {
                        console.log(playerId);
                        let playerObj = this.championship.players.find(player => player.id == playerId);

                        this.players[playerId] = {
                            goals: player.goals_num,
                            against: player.against,
                            id: playerId,
                            name: playerObj.name,
                            assists: player.assists,
                            matches: 1,
                            avg: parseFloat(player.goals_num / 1).toFixed(1)
                        }
                    } else {
                        this.players[playerId].goals += player.goals_num;
                        this.players[playerId].against += player.against;
                        this.players[playerId].assists += player.assists;
                        this.players[playerId].matches++;
                        this.players[playerId].avg = parseFloat(this.players[playerId].goals / this.players[playerId].matches).toFixed(1);
                    }
                })
            })
        })
    }

    makeRanking() {
        this.players.sort((first, second) => {
            if (first.goals == second.goals) {
                if (second.avg == first.avg) {
                    return second.assists - first.assists;
                }

                return second.avg - first.avg;
            }


            return second.goals - first.goals; 
        })

        return this.players;
    }
}