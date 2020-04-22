const url = '/api'

const operation = async () => {
  await fetch(`${url}/operation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
}

export default {
  operation
}
