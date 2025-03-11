import React from 'react'
import './Footer.css'

export default function Footer({setisOpen}) {

  const handleModal = () =>{
    setisOpen(true)
  }

  return (
    <div className='FooterContainer' onClick={handleModal}> 
      <p> Rules </p>
    </div>
  )
}
 