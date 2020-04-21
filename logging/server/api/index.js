const express = require('express')
const apiRoute = express.Router()
const entriesApi = require('./entries')

apiRoute
  .use('/entries', entriesApi)
  .get('*', (req, res) => {
    console.error(`Unknown api request: ${req.path}`)
    res.status(404).end()
  })

module.exports = apiRoute
