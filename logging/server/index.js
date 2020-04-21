const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const apiRoute = require('./api')

const { PORT = 3000 } = process.env

const app = express()
const staticFilesDirectory = path.resolve(process.cwd(), 'client', 'build')

app
  .use(bodyParser.json())
  .use(express.static(staticFilesDirectory))
  .use('/api', apiRoute)
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
