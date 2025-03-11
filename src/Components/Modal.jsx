import React from 'react'
import { IoMdClose } from "react-icons/io";
import './Modal.css'

export default function Modal2({isOpen, setisOpen}) {
    const closeModal = () => {
        setisOpen(false)
    }

  return (
    <div className="ModalContainer">
      <div className='ModalHeader'>
        <h1> Rules </h1>
        <IoMdClose size={50} onClick={closeModal} className='closeButton'/> 
      </div>
      <div className='imageContainer'>
        <img src='images/image-rules.svg' alt='rules of the game' className='image' />
      </div>
    </div>
  )
}
