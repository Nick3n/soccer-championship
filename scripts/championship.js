import Season from './season.js';
import Storage from './storage.js';
import Rounds from './rounds.js';
import Table from './table.js';

(async () => {
    const storage = new Storage();
    await storage.saveFile("season1");
    await storage.saveFile("teams");
    
    class ChampionshipPage {
        constructor() {
            const championshipId = Storage.get("championship-id");
            const season = new Season(championshipId);
            let rounds = new Rounds(championshipId);
            rounds = rounds.rounds;

            const info = this.showInfo(season, rounds);
            const main = document.getElementsByTagName('main')[0];
            main.innerHTML = info + main.innerHTML;

            const table = this.showTable(rounds);
            main.innerHTML += table;

            const roundsPage = this.showRounds(rounds);
            main.innerHTML += roundsPage;
        }

        showInfo(season, rounds) {
            return `<h2>${season.name}</h2>
            <div class="info">
                <div class="label">
                    <span>Jogadores Inscritos</span>
                    <h3>${season.players_length}</h3>
                </div>
                <div class="label">
                    <span>Rodadas Jogadas</span>
                    <h3>${rounds.length} Rodadas</h3>
                </div>
                <div class="label date">
                    <span>Data de Início</span>
                    <h3>${season.start}</h3>
                </div>
                <div class="label date">
                    <span>Data de Encerramento</span>
                    <h3>${season.end}</h3>
                </div>
            </div>
            <a href="players.html" class="players" data-players-championship="${season.id}">Ver Jogadores</a>
            `
        }

        showRounds(rounds) {
            let roundsHtml = '<div class="rounds"><h3>Rodadas</h3>';

            rounds.forEach(round => {
                let roundHtml = `<div class="round"><h4>Rodada ${round.round}</h4>`;
                let matchesHtml = '';
                round.matches.forEach(match => {

                    let matchHtml = '';
                    matchHtml += `<div class="match">
                        <div class="result">
                            <div class="team">
                                <img src="../assets/teams/${match.team_1.logo}" >
                                <h5>${match.team_1.name}</h5>
                            </div>
                            <span class="versus">${match.team_1.score} x ${match.team_2.score}</span>
                            <div class="team">
                                <h5>${match.team_2.name}</h5>
                                <img src="../assets/teams/${match.team_2.logo}" >
                            </div>
                        </div>
                        <a href="#">Mais Informações</a>
                    </div>`
                    matchesHtml += matchHtml;
                })
                roundHtml += matchesHtml;
                roundsHtml += roundHtml + '</div>';
            })

            return roundsHtml;
        }

        showTable(rounds) {
            const table = new Table(rounds);
            const teams = table.makeRanking();
            console.log(teams);
            let tableHtml = `<div class="table">
            <h3>Tabela do Campeonato</h3>
            <table>
                <tr class="col">
                    <th>Pos</th>
                    <th>Time</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>G</th>
                    <th>GC</th>
                    <th>SG</th>
                </tr>`;
            teams.forEach((team, index) => {
                tableHtml += `<tr class="wpos">
                <td>${index + 1}</td>
                <td>${team.name}</td>
                <td>${team.matches}</td>
                <td>${team.victory}</td>
                <td>${team.draw}</td>
                <td>${team.defeat}</td>
                <td>${team.score}</td>
                <td>${team.against}</td>
                <td>${team.goalDiff}</td>
                </tr>`
            })
            tableHtml += `</tr></table></div>`;

            return tableHtml;
        }   
    }

    await new ChampionshipPage();
})()

class Player {
    id;
    name;
    captain;
    discord;
}

class Ranking {

}
/**
 * Aproveitamento =  ((Partidas Jogadas * 10) - ((Saldo de Gols + (Assistencias/2) - Gol Contra)) * 10
 */