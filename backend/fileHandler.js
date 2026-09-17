import fs from "fs/promises";

export const readJsonFile = async (filePath) => {
    try {
        const content = await fs.readFile(filePath, "utf8");
        return JSON.parse(content);
    } catch (err) {
        console.error(err.message);
    }
};

export const writeJsonFile = async (filePath, items) => {
    try {
        return fs.writeFile(filePath, JSON.stringify(items, null, 2));
    } catch (err) {
        console.error(err.message);
    }
};
