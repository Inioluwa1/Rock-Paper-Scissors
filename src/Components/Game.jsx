import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Game.css'


export default function Game() {
	const navigate = useNavigate();

	const gotoGameMode = (id) => {
		navigate('/gamemode', {state : {id} })
		// console.log(id)
	}

  return (
    <div className='gameContainer'>
			
			<div className='triangle'>
	      <img src='/public/images/bg-triangle.svg' alt='background' />
			</div>

      <div className='papercharacter' onClickCapture={() => gotoGameMode(1)}>
				<div className='paper'>
        	<img src='/public/images/icon-paper.svg' alt='paper' />
				</div>
      </div>

			<div className='scissorscharacter' onClickCapture={() => gotoGameMode(2)}>
				<div className='scissors'>
	      	<img src='/public/images/icon-scissors.svg' alt='scissors' />
				</div>
			</div>

			<div className='rockcharacter' onClickCapture={() => gotoGameMode(3)}>
				<div className='rock'>
		      <img src='/public/images/icon-rock.svg' alt='rock' />
				</div>
			</div>

    </div>
  )
}
