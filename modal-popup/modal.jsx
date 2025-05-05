import React from 'react'

function Modal({ id, footer, header, body, onClose }) {
  return (
    <div className='w-full h-full  bg-yellow-500 fixed top-0 left-0 z-0 flex justify-center items-center'>
      <div className='modal-content absolute bg-amber-600 w-[80%]'>
        <span className='absolute top-1 right-6 text-2xl text-white cursor-pointer' onClick={onClose}>X</span>
        <div className=' bg-green-600'>
          {header ? <div className='font-bold text-5xl text-center text-white  py-[50px] px-[200px]'>{header}</div> : <div>Header Section</div>}
        </div>
        <div className='bg-white text-center h-[200px]'>
          {body ? <h1>{body}</h1> : <div>Body Section</div>}
        </div>
        <div>
          {footer ? <div className='font-bold text-5xl py-[50px] text-center bg-green-600 text-white'>{footer}</div> : <h2>Footer section</h2>}
        </div>
      </div>
    </div>
  )
}

export default Modal
