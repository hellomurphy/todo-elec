import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { Low, JSONFile } from 'lowdb'

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const __dirname = dirname(fileURLToPath(import.meta.url))
// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

app.post('/', async function (req, res) {
  db.data ||= { todoList: [] }
  const { todoList } = db.data
  todoList.push(req.body)
  await db.write()
  res.json(req.body)
})

app.delete('/:id', async function (req, res) {
  const { todoList } = db.data
  todoList.filter(todo => {
    return todo.id !== req.params.id
  })
  await db.write()
})

app.get('/', async function (req, res) {
  await db.read()
  db.data ||= { todoList: [] }
  res.json(db.data)
})

module.exports = {
  path: '/api/',
  handler: app
}
