const express = require('express')
const route = express.Router()

const EntriesList = require('./classes/entries-list')
const entries = new EntriesList()

route
  .get('/', (_, res) => {
    res.json(entries.get())
  })
  .post('/', (req, res) => {
    const newEntry = entries.add(req.body)
    logger.log(`Added new entry with id "${newEntry.id}"`)
    res.json(newEntry)
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params
    entries.remove(id)
    logger.log(`Deleted entry with id "${id}"`)
    res.end()
  })

module.exports = route
