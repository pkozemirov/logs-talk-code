import React, { useState } from 'react'
import api from './api'

export default () => {
  const [value, setValue] = useState('')
  const [reversedValue, setReversedValue] = useState('')

  const onSubmit = async event => {
    event.preventDefault()
    const { text: reversedValue } = await api.reverse({ text: value })
    setReversedValue(reversedValue)
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
        <button type='submit'>Reverse</button>
      </form>
      <div className='result'>{reversedValue}</div>
    </div>
  )
}
