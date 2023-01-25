import Storage from "./storage.js";

export async function loadStorageExec() {
    const storage = new Storage();
    await storage.saveFile("season1");
    await storage.saveFile("teams");
}