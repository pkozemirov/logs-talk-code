const express = require('express')
const bodyParser = require('body-parser')

const { PORT = 3001 } = process.env

express()
  .use(bodyParser.json())
  .post('/reverse', (req, res) => {
    const { text } = req.body
    const reversedText = text
      .split('')
      .reverse()
      .join('')
    res.json({
      text: reversedText
    })
  })
  .listen(PORT)
