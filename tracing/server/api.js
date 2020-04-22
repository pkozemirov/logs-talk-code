const axios = require('axios')
const express = require('express')
const apiRoute = express.Router()

const { WORKER_URL } = process.env

apiRoute
  .post('/reverse', async (req, res) => {
    const { data } = await axios.post(`${WORKER_URL}/reverse`, req.body)
    res.json(data)
  })
  .get('*', (_, res) => {
    res.status(404).end()
  })

module.exports = apiRoute
