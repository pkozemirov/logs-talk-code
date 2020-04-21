import React, { useState, useEffect } from 'react'
import api from './api'

export default () => {
  const [entries, setEntries] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    api.get().then(setEntries)
  }, [])

  const onSubmit = async event => {
    event.preventDefault()
    await api.add({ text: value })
    const entries = await api.get()
    setValue('')
    setEntries(entries)
  }

  const remove = async id => {
    await api.remove(id)
    const entries = await api.get()
    setEntries(entries)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          required
          onChange={({ target: { value } }) => setValue(value)}
          value={value}
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {entries.map(item => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => remove(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
