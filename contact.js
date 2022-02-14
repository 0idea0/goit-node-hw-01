// contacts.js
const fs = require('fs/promises')
const { randomUUID } = require('crypto')

const path = require('path')
//const ct = require('./db/contacts.json')

const readContent = async () => {
    const content = await fs.readFile(
        path.join(__dirname, 'db', 'contacts.json'),
        'utf-8',
    )
    const result = JSON.parse(content)
    return result
}

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
async function listContacts() {
  return await readContent()
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  const contacts = await readContent()
  const newContact = { id: randomUUID(), name, email, phone }
  contacts.push(newContact)
  await fs.writeFile(
    path.join(__dirname, 'db', 'contacts.json'),
    JSON.stringify(contacts, null, 2),
  )
  return newContact
}

module.exports = { listContacts, getContactById, removeContact, addContact }