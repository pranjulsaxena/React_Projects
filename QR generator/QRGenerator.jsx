import React, { useState, useRef } from 'react'
import QRCode from 'react-qr-code'

function QRGenerator() {
  // const [Input, setInput] = useState('');
  const [qrValue, setqrValue] = useState('');
  const inputRef = useRef('');

  const handleQRGenerator = () => {
    if(!inputRef.current.value.trim())return;
    console.log(inputRef.current.value);
    setqrValue(inputRef.current.value);
    inputRef.current.value = '';
  }
  return (
    <div className='w-screen h-screen flex flex-col items-center gap-y-5 mt-10'>
      <div>
        <input className={"border-2 px-3 py-1 mr-4 rounded-sm"} type='text' placeholder='Enter value' ref={inputRef} />
        <button onClick={handleQRGenerator} className='border rounded-sm px-2 py-1 cursor-pointer'>Generate</button>
      </div>
      {qrValue && <QRCode value={qrValue} size={400} />}
    </div>
  )
}

export default QRGenerator
