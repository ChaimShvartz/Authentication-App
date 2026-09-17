import { readJsonFile, writeJsonFile } from "../fileHandler.js";

const USERS_FILE_PATH = "data/users.json";

export const getUsers = () => {
    return readJsonFile(USERS_FILE_PATH);
};

export const addUser = async (user) => {
    const users = await getUsers();
    const id = Math.max(...users.map((u) => u.id), 0) + 1;
    users.push({id, ...user});
    return writeJsonFile(USERS_FILE_PATH, users);
};

export const getUserByEmail = async (email) => {
    const users = await getUsers();
    return users.find((u) => u.email === email);
};
