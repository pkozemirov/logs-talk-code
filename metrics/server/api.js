const express = require('express')
const apiRoute = express.Router()
const promClient = require('prom-client')
const counter = new promClient.Counter({
  name: 'operation',
  help: 'Operation count'
})

apiRoute
  .post('/operation', async (_, res) => {
    counter.inc()
    await new Promise(resolve => setTimeout(resolve, 1000))
    res.end()
  })
  .get('*', (_, res) => {
    res.status(404).end()
  })

module.exports = apiRoute
