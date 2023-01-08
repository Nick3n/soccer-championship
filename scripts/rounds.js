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
            let group = round.group ?? "none";
            let hasGroups = round.group ? true : false;
            this.rounds.push({
                round: round.round_num,
                group: group,
                matches: matchObjects,
                hasGroups
            })
        })
    }

    get() {
        return this.rounds;
    }
}