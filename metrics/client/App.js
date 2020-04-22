import React, { useState } from 'react'
import api from './api'

const STATE = {
  READY: 0,
  PROGRESS: 1
}

export default () => {
  const [state, setState] = useState(STATE.READY)

  const onSubmit = async event => {
    event.preventDefault()
    setState(STATE.PROGRESS)
    await api.operation()
    setState(STATE.READY)
  }

  const getStateCaption = () => {
    return state === STATE.READY ? 'Ready' : 'Processing...'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button disabled={state === STATE.PROGRESS} type='submit'>
          Start operation
        </button>
      </form>
      <div className='result'>{getStateCaption()}</div>
    </div>
  )
}
