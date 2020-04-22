const axios = require('axios')
const express = require('express')
const apiRoute = express.Router()
const tracer = require('../tracer')

const { WORKER_URL } = process.env

apiRoute
  .post('/reverse', async (req, res) => {
    const span = tracer.startSpan('request')
    tracer.inject(span.context(), tracer.format, req.body)
    const { data } = await axios.post(`${WORKER_URL}/reverse`, req.body)
    res.json(data)
    span.finish()
  })
  .get('*', (_, res) => {
    res.status(404).end()
  })

module.exports = apiRoute
