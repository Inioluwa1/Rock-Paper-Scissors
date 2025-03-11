import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Modal from './Components/Modal'
import Game from './Components/Game'
import GameMode from './Components/GameMode'
import './App.css'

function App() {
  const [isOpen, setisOpen] = useState(false)
  const [score, setScore] = useState(0)

  return ( 
    <div className={`App ${isOpen? "blur" : ""}`}>
      <Router>

        <Header score={score} />

        <Routes>
          <Route path='/' element={ <Game /> }/>
          <Route path='/gamemode' element={ <GameMode score={score} setScore={setScore} />} />
        </Routes>

        {isOpen && <Modal isOpen={isOpen} setisOpen={setisOpen} />}

        <Footer isOpen={isOpen} setisOpen={setisOpen} />
      </Router>
    </div>
  )
}

export default App
