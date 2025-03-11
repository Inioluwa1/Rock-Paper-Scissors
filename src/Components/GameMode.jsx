import React, { useEffect, useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import './GameMode.css'

export default function GameMode() {
  const [housePicknum, sethousePicknum] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  //pick a random number between 1 and 3 which coincides with the id of either rock, paper or scissors.
  useEffect(() => {
    const timer = setTimeout(() => {
      const  num  = Math.floor(Math.random() * 3) + 1;
      sethousePicknum(num)
    }, 1000)

    return () => clearTimeout(timer)

  }, [])


  return (
    <div className={`GameModeContainer ${housePicknum? 'played' : ""}`}>
      
      <div className='Choosengame'>
        <h1> You picked </h1>
        {id === 1 ?
        <div className='GMpapercharacter'>
          <div className='GMpaper'>
            <img src='/public/images/icon-paper.svg' alt='paper' />
          </div>
        </div>: ''}

        {id === 2?
        <div className='GMscissorscharacter'>
        <div className='GMscissors'>
          <img src='/public/images/icon-scissors.svg' alt='scissors' />
        </div>
      </div> : ""}

        {id === 3?
        <div className='GMrockcharacter'>
        <div className='GMrock'>
          <img src='/public/images/icon-rock.svg' alt='rock' />
        </div>
      </div> :""}
      </div>

      {housePicknum?  
        <div className='gameplayed'> 
          <h1> You {id === housePicknum? "Draw" : id === 1 && housePicknum === 3 || id === 2 && housePicknum === 1 || id === 3 && housePicknum === 2 ? "Win" : "Lose" } </h1>
          <button> Play Again </button> 
        </div> : ""}
  
      <div className='housePicked'>
        <h1> The house picked </h1>
        {!housePicknum && <h1 className='circle'> </h1>}

        {housePicknum === 1 ?
        <div className='GMpapercharacter'>
          <div className='GMpaper'>
            <img src='/public/images/icon-paper.svg' alt='paper' />
          </div>
        </div>: ""}

        {housePicknum === 2?
        <div className='GMscissorscharacter'>
        <div className='GMscissors'>
          <img src='/public/images/icon-scissors.svg' alt='scissors' />
        </div>
      </div> : ""}

        {housePicknum === 3?
        <div className='GMrockcharacter'>
        <div className='GMrock'>
          <img src='/public/images/icon-rock.svg' alt='rock' />
        </div>
      </div> : ""}
        
      </div>
      
    </div>
  )
}
