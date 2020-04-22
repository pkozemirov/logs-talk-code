const express = require('express')
const apiRoute = express.Router()

apiRoute
  .post('/operation', async (_, res) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    res.end()
  })
  .get('*', (_, res) => {
    res.status(404).end()
  })

module.exports = apiRoute
