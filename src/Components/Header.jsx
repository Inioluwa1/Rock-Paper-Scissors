import React from 'react'
import { useState } from 'react'
import './Header.css'


export default function Header({myScore, computerScore}) {
    

  return (
    <div className='HeaderContainer'>
        
      <div>
        <img src='images/logo.svg' alt='Rock Paper Scissors' className='logoImage'/>
      </div>

      <div className='generalscoreContainer'>
        <div className="scoreContainer"> 
          <p className='scoreTitle'> My Score </p>
          <h1 className='scoreValue'> {myScore} </h1>
        </div>

        <div className="scoreContainer"> 
          <p className='scoreTitle'> House Score </p>
          <h1 className='scoreValue'> {computerScore} </h1>
        </div>
      </div>
    </div>
  )
}
