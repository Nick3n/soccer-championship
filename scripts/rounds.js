import Match from './match.js';
import Storage from './storage.js';

export default class Rounds {
    rounds;
    
    constructor(seasonId) {
        const season = Storage.get(seasonId)
        const rounds = season.rounds;
        this.rounds = [];
        rounds.forEach(round => {
            const matchObjects = [];
            round.matches.forEach(match => {
                const matchObj = new Match(match)
                matchObjects.push(matchObj.get())
            })
            this.rounds.push({
                round: round.round_num,
                matches: matchObjects
            })
        })
    }

    get() {
        return this.rounds;
    }
}