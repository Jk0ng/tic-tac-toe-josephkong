import React from 'react'
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game")
  }
  return (
    < >
      <div className='intro-container'>
        <p className='intro-header'>Welcome to Tic-Tac-Toe created by Joseph Kong</p>
        <p className='intro-body'>Let's
          <button
            className="intro-button"
            onClick={handleClick}
          >play!</button></p>
      </div>
    </>
  )
}

export default LandingPage