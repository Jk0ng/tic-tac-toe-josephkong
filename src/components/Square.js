import React from 'react'

const Square = ({ squares, index, clickedSquare }) => {
  const handleClick= () => {
    clickedSquare(index)
  }
  return (
    <div className="square"
      onClick={handleClick}
    >{squares}</div>
  )
}
export default Square
