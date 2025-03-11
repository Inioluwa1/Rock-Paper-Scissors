import React from 'react'
import { useState } from 'react'
import './Header.css'


export default function Header({score}) {
    

  return (
    <div className='HeaderContainer'>
        
      <div>
        <img src='images/logo.svg' alt='Rock Paper Scissors'/>
      </div>

      <div className="scoreContainer"> 
        <p className='scoreTitle'> Score </p>
        <h1 className='scoreValue'> {score} </h1>
      </div>

    </div>
  )
}
