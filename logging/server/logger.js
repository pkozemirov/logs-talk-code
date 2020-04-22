const axios = require('axios')
const { LOGSTASH_URL } = process.env

module.exports = {
  log () {
    const data = [new Date().toISOString(), 'INFO', ...arguments].join(' ')
    console.log(data)
    axios.put(LOGSTASH_URL, data)
  },
  error () {
    const data = [new Date().toISOString(), 'ERROR', ...arguments].join(' ')
    console.error(data)
    axios.put(LOGSTASH_URL, data)
  }
}