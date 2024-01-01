import React from 'react'

function Reset({reset}) {
  return (
    <button
        onClick={reset}
        className='resetButton'
    >RESTART</button>
  )
}

export default Reset