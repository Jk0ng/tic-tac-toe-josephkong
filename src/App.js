import React, { useState } from 'react'
import Square from './components/Square'
import Reset from './components/Reset'
import './App.css'
import CurrentPlayer from './components/CurrentPlayer'
import { Button, Input, Label, Modal, ModalHeader } from "reactstrap"
import ModalComponent from "./components/ModalComponent"

import { click } from '@testing-library/user-event/dist/click'



const App = () => {
  const [squares, setSquares] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [playerX, setPlayerX] = useState(" ")
  const [playerY, setPlayerY] = useState("")
  const handleChange = (e) => {
    setPlayerX(e.target.value)
  }
  const handleChangeY = (e) => {
    setPlayerY(e.target.value)
  }
  const playerTurn = () => {
    if (squares.filter((value)=> value === "?").length % 2 !== 0) {
      return `${playerX}'s turn`
    }
    else if (squares.filter((value)=> value === "?").length % 2 === 0)
    {
      return `${playerY}'s turn`
    }
  }
  const [modal, setModal] = useState(true)
  const toggle = () => {
    setModal(!modal)
  }
  var updatedSquares = [...squares]
  const checkWinning = (array) => {
    var winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winningConditions.length; i++) {
      let parentArray = winningConditions[i]
      if (
        (
          (array[parentArray[0]] ===
            array[parentArray[1]]) &&
          (array[parentArray[1]] ===
            array[parentArray[2]])
        )
        &&
        (
          array[parentArray[0]] !== "?"
        )
      ) {
        alert(`${array[parentArray[0]]} won!`);
        reset(); break
      }
    }
  }
  const reset = () => {
    console.log('reset')
    setSquares(["?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
  }
  const clickedSquare = (clickedIndex) => {
    if (updatedSquares.filter((value) => value === "?").length % 2 !== 0 && updatedSquares[clickedIndex] === "?") {
      updatedSquares[clickedIndex] = "X"
    }
    else if (updatedSquares.filter((value) => value === "?").length % 2 === 0 && updatedSquares[clickedIndex] === "?") {
      updatedSquares[clickedIndex] = "O"
    }
    else if (updatedSquares.filter((value) => value === "?").length === 0) { alert("Ooops no more squares...Hit restart to play again") }
    setSquares(updatedSquares)
  }

  return (
    <>
      <h1 className='title'>Tic Tac Toe</h1>
      <div className="container" onClick={checkWinning(squares)}>
        {squares.map((value, index) => {
          return (
            <Square
              squares={value}
              index={index}
              key={index}
              clickedSquare={clickedSquare}
            />
          )
        })}
        <div className="entire-content">
          <ModalComponent modal={modal} toggle={toggle} playerX={playerX} playerY={playerY} handleChange={handleChange} handleChangeY={handleChangeY}/>
          <Button className="button" color="primary" onClick={toggle}>
            START
          </Button>
          CurrentPlayer: {playerTurn()}
        </div>
      </div>
      <Reset
        reset={reset} />
    </>
  )
}

export default App