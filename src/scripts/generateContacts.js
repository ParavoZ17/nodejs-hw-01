import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }
  await writeContacts(newContacts);
};

generateContacts(5);
