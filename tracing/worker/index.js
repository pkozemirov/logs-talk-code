const express = require('express')
const bodyParser = require('body-parser')
const tracer = require('../tracer')

const { PORT = 3001 } = process.env

express()
  .use(bodyParser.json())
  .post('/reverse', (req, res) => {
    const span = tracer.startSpan('operation', {
      childOf: tracer.extract(tracer.format, req.body)
    })
    try {
      throw new Error('somethin went wrong')
    } catch (error) {
      span.setTag('error', true)
      span.log({
        error: error.message
      })
    }
    const { text } = req.body
    const reversedText = text
      .split('')
      .reverse()
      .join('')
    res.json({
      text: reversedText
    })
    span.finish()
  })
  .listen(PORT)
