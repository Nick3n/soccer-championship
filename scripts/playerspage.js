import { loadStorageExec } from "./loadStorageExec.js";
import PlayersRanking from "./playersRanking.js";
import Storage from "./storage.js";
import teamsChampionship from "./teamsChampionship.js";

(async () => {
    await loadStorageExec();

    class PlayersPage {
        constructor() {
            const grid = document.getElementsByClassName('grid')[0];
            const ranking = document.getElementsByClassName('ranking')[0];
            
            const championshipId = Storage.get("championship-id");
            const teamsIn = new teamsChampionship(championshipId);
            const teams = teamsIn.teams;
            const playersRanking = new PlayersRanking(championshipId);
            const rankingArray = playersRanking.makeRanking();
            const rankingHtml = this.makePlayersankingHtml(rankingArray);

            const box = this.makePlayersBox(teams);
            ranking.innerHTML += rankingHtml;
            grid.innerHTML += box;
        }

        makePlayersBox(teams) {
            let playersBoxHtml = `<h3>Jogadores</h3>`

            teams.forEach(team => {
                team.players.forEach(player => {
                    playersBoxHtml += `<div class="player">
                    <div class="label">
                        <span>Nome</span>
                        <h3>${player.name}</h3>
                    </div>
                    <div class="label">
                        <span>Discord</span>
                        <h3>${player.discord}</h3>
                    </div>
                    <div class="label">
                        <span>Capitão</span>
                        <h3>${player.captain ? 'Sim' : 'Não'}</h3>
                    </div>
                    <a href="./player.html">Perfil do Jogador</a>
                </div>>`
                })
            })

            return playersBoxHtml;
        }

        
        makePlayersankingHtml(players) {
            let tableHtml = `<table>
            <tr class="col">
                <th>Pos</th>
                <th>Jogador</th>
                <th>Partidas</th>
                <th>Gols</th>
                <th>Assistências</th>
                <th>Média de Gols</th>
                <th>Contra</th>
            </tr>`;

            players.forEach((player, index) => {
                tableHtml += `<tr class="wpos">
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.matches}</td>
                <td>${player.goals}</td>
                <td>${player.assists}</td>
                <td>${player.avg}</td>
                <td>${player.against}</td>
            </tr>`
            })
            tableHtml += `</table>`;

            return tableHtml;
        }
    }

    new PlayersPage();
})();