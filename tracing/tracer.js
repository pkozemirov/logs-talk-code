const { FORMAT_TEXT_MAP } = require('opentracing')
const { initTracer } = require('jaeger-client')
const {
  JAEGER_SERVICE_NAME = 'tracing',
  JAEGER_ENDPOINT
} = process.env

module.exports = initTracer({
  serviceName: JAEGER_SERVICE_NAME,
  reporter: {
    logSpans: true,
    collectorEndpoint: JAEGER_ENDPOINT
  },
  sampler: {
    type: 'const',
    param: 1
  }
})
module.exports.format = FORMAT_TEXT_MAP