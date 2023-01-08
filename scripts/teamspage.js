import Storage from "./storage.js";
import teamsChampionship from "./teamsChampionship.js";

(async () => {
    const storage = new Storage();
    await storage.saveFile("season1");
    await storage.saveFile("teams");

    class TeamsPage {
        constructor() {
            const grid = document.getElementsByClassName('grid')[0];
            
            const championshipId = Storage.get("championship-id");
            const teamsIn = new teamsChampionship(championshipId);
            const teams = teamsIn.teams;
            console.log(teams);
            teams.forEach(team => {
                let teamBox = this.makeTeamBox(team);
                grid.innerHTML += teamBox;
            })
        }

        makeTeamBox(team) {
            let teamBoxHtml = `
            <div class="team">
            <div class="label">
                <img src="../assets/teams/${team.logo}" />
                <span>Time</span>
                <h3>${team.name}</h3>
            </div>
            <div class="label">
                <span>Capitão</span>
                <h3>${team.captain.name}</h3>
            </div>
            <div class="label">
                <span>Jogadores</span>`

                team.players.forEach(player => {
                    if (player.captain) return;
                    teamBoxHtml += `<h3>${player.name}</h3>`
                })
            
            teamBoxHtml += `</div></div>
            `;
            return teamBoxHtml;
        }
    }

    new TeamsPage();
})();