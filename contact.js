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

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts, getContactById, removeContact, addContact }