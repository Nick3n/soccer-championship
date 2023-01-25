import { loadStorageExec } from './loadStorageExec.js';
import Season from './season.js';
import Storage from './storage.js';

(async () => {
   await loadStorageExec();
    
    class ChampionshipsPage {
        showSeasons() {
            const season1 = new Season("1");
            const seasons = [season1];
            seasons.forEach(season => {
                const main = document.getElementsByTagName("main")[0];
                const el = this.createSeasonElement(season);
                main.innerHTML += el;
                const visit = document.querySelector(`[data-visit-championship-${season.id}]`)
                visit.addEventListener("click", e => {
                    e.preventDefault();
                    this.createVisitChampionship(season.id)
                })
            })
        }
    
        createSeasonElement(season) {
            return `<div class="championship" data-championshipid="${season.id}">
            <div class="label">
                <span>Nome</span>
                <h3>${season.name}</h3>
            </div>
            <div class="label">
                <span>Jogadores Inscritos</span>
                <h3>${season.players_length}</h3>
            </div>
            <div class="label date">
                <span>Data de Início</span>
                <h3>${season.start}</h3>
            </div>
            <div class="label date">
                <span>Data de Encerramento</span>
                <h3>${season.end}</h3>
            </div>
            <a href="championship.html" class="visit" data-visit-championship-${season.id}="${season.id}">Visitar</a>
            </div>`;
        }
    
        createVisitChampionship(id) {
            Storage.save("championship-id", id)
            location.href = "./championship.html"
        }
    }
    
    const page = new ChampionshipsPage();
    page.showSeasons();
})()
