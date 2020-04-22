const url = '/api'

const reverse = async data => {
  const fetchResult = await fetch(`${url}/reverse`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  const result = await fetchResult.json()
  return result
}

export default {
  reverse
}
