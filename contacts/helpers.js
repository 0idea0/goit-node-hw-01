const fs = require('fs/promises')
const contactsPath = require("./path");

const readContent = async () => {
  const content = await fs.readFile(contactsPath,'utf8')
  const result = JSON.parse(content)
  return result
}

const updateContent = async (filePath, contacts) => {
  await fs.writeFile(filePath, JSON.stringify(contacts));
}

module.exports = { readContent, updateContent }