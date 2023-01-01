export default class Storage {
    async saveFile(filename) {
        await fetch(`../database/${filename}.json`)
        .then((response) => response.json())
        .then((json) => {
            const season = json.season;
            localStorage.setItem(season.id, JSON.stringify(json.season));
        });
    }

    static save(name, item) {
        if (typeof item != String) {
            item = JSON.stringify(item);
        }
        localStorage.setItem(name, item);
    }

    static get(item) {
        if (!localStorage.getItem(item)) throw new Error (`Item '${item}' inexistente no Storage`);
        const season = localStorage.getItem(item);
        return JSON.parse(season);
    }
}