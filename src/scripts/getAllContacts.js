import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contacts = await readContacts();
    return contacts;
};

console.log(await getAllContacts());
