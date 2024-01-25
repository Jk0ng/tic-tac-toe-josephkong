import React from 'react'
import Game from './components/Game'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from './components/LandingPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App