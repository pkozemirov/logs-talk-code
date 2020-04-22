const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const apiRoute = require('./api')

const { PORT = 3000 } = process.env

const app = express()
const staticFilesDirectory = path.resolve(__dirname, '../client/build')

app
  .use(express.static(staticFilesDirectory))
  .use(bodyParser.json())
  .use('/api', apiRoute)
  .listen(PORT)
