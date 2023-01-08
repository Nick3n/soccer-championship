export default class Storage {
    async saveFile(filename) {
        await fetch(`../database/${filename}.json`)
        .then((response) => response.json())
        .then((json) => {
            if(json.season != undefined) {
                localStorage.setItem(json.season.id, JSON.stringify(json.season));
            } else {
                localStorage.setItem(filename, JSON.stringify(json.teams));
            }
        });
    }

    static save(name, item) {
        if (typeof item != String) {
            item = JSON.stringify(item);
        }
        localStorage.setItem(name, item);
    }

    static get(item) {
        if (item == "championship-id" && !localStorage.getItem(item)) location.href = "https://cb3d.perejon.com.br/pages/championships.html"
        if (!localStorage.getItem(item)) throw new Error (`Item '${item}' inexistente no Storage`);
        const season = localStorage.getItem(item);
        return JSON.parse(season);
    }
}