import { loadStorageExec } from "./loadStorageExec.js";
import Storage from "./storage.js";
import teamsChampionship from "./teamsChampionship.js";

(async () => {
    await loadStorageExec();

    class PlayersPage {
        constructor() {
            const grid = document.getElementsByClassName('grid')[0];
            
            const championshipId = Storage.get("championship-id");
            const teamsIn = new teamsChampionship(championshipId);
            const teams = teamsIn.teams;
            const box = this.makePlayersBox(teams);
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
    }

    new PlayersPage();
})();