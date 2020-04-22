const prometheusClient = require('prom-client')
const express = require('express')
const { METRICS_PATH = '/-/metrics', METRICS_PORT = 9091 } = process.env

function setupMetrics () {
  prometheusClient.collectDefaultMetrics()
  express()
    .get(METRICS_PATH, (_, res) => {
      res.set('Content-Type', prometheusClient.register.contentType)
      res.end(prometheusClient.register.metrics())
    })
    .get('*', (_, res) => res.status(404).end())
    .listen(METRICS_PORT)
}

module.exports = setupMetrics
