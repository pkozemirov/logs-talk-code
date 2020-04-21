const url = '/api/entries'

const add = async data => {
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

const get = async () => {
  const fetchResult = await fetch(url)
  const data = await fetchResult.json()
  return data
}

const remove = async id => {
  await fetch(`${url}/${id}`, { method: 'DELETE' })
}

export default {
  get,
  add,
  remove
}
