class Championship {

}

class Season {
    name;
    start;
    end;
    participant_teams;
}

class Team {
    id;
    name;
    description;
    created_by;
    founded_in;
}

class Player {
    id;
    name;
    captain;
    discord;
}

class Round {
    round;
    date;
    matches;
}

class Match {

}

class Ranking {

}

class Table {

}

/**
 * Aproveitamento =  ((Partidas Jogadas * 10) - ((Saldo de Gols + (Assistencias/2) - Gol Contra)) * 10
 */