import React from 'react'
import { useState } from 'react'
import './Header.css'


export default function Header() {
    const [score, setScore] = useState(12)

  return (
    <div className='HeaderContainer'>
        
      <div>
        <img src='/public/images/logo.svg' alt='Rock Paper Scissors'/>
      </div>

      <div className="scoreContainer"> 
        <p className='scoreTitle'> Score </p>
        <h1 className='scoreValue'> {score} </h1>
      </div>

    </div>
  )
}
