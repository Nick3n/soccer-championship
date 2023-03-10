import Storage from './storage.js';

export default class Season {
    id;
    name;
    start;
    end;
    participant_teams;
    players_length;

    constructor(seasonId) {
        const season = Storage.get(seasonId);
        this.id = season.id;
        this.name = season.name;
        this.start = season.start;
        this.end = season.end;
        this.participant_teams = season.participant_teams;
        this.players_length = season.players.length;
        this.groups = season.groups;
        this.hasGroups = season.hasGroups;
        this.hasQualifiers = season.hasQualifiers;
        this.qualifiers = season.qualifiers;
        this.hasRounds = season.hasRounds ? season.hasRounds : true;
        this.players = season.players;
    }

    get() {
        return {
            id: this.id,
            name: this.name,
            start: this.start,
            end: this.end,
            participant_teams: this.participant_teams,
            players_length: this.players_length,
            groups: this.groups,
            hasGroups: this.hasGroups,
            hasQualifiers: this.hasQualifiers,
            qualifiers: this.qualifiers,
            hasRounds: this.hasRounds,
            players: this.players
        }
    }
}
