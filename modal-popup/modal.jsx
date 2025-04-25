import React from 'react'

function Modal({ id, footer, header, body, onClose }) {
  return (
    <div className='modal-content bg-amber-600 w-[700px]'>
      <div className='flex gap-x-2 bg-green-600'>
        {header ? <div className='font-bold text-5xl text-center'>{header}</div> : <div>Header Section</div>}
        <span>X</span>
      </div>
      <div>
        {body ? <h1>{body}</h1> : null}
      </div>
      <div>
        {footer ? <div className='font-bold text-5xl'>{footer}</div> : <h2>footer section</h2>}
      </div>
    </div>
  )
}

export default Modal
