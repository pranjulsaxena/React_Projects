import React, { useState } from 'react'
import Modal from './modal'

function Modal_popup() {
    const [modalPopup, setModalPopup] = useState(false);
    const handleClick = () => {
        setModalPopup(!modalPopup);
    }
    return (
        <div className='w-full h-full flex  flex-col items-center'>
            <button onClick={handleClick} className='border px-1 py-1'>Open Modal Popup</button>
            {modalPopup ? <Modal footer={"Customized Footer"} header={"Customized Header"} body={<div>Customized Body</div>}  onClose={handleClick}/> : null}
        </div>
    )
}

export default Modal_popup
