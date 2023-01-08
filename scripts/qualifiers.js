import Match from './match.js';
import Storage from './storage.js';

export default class Qualifiers {
    qualifiers;
    
    constructor(seasonId) {
        const season = Storage.get(seasonId)
        const qualifiers = season.qualifiers;
        this.qualifiers = [];
        qualifiers.forEach(qualifier => {
            const matchObjects = [];
            qualifier.matches.forEach(match => {
                const matchObj = new Match(match)
                matchObjects.push(matchObj.get())
            })
            this.qualifiers.push({
                name: qualifier.name,
                matches: matchObjects,
            })
        })
    }

    get() {
        return this.qualifiers;
    }
}