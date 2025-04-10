import React, { useState } from 'react'

import { FaStar } from "react-icons/fa";

function Star_rating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    

    function handleClick(index) {
    setRating(index);

    }
    function handleEnter(index) {
       setHover(index);

    }
    function handleLeave() {
        setHover(rating);
    }

    return (
        <div className='flex text-5xl w-screen h-screen justify-center items-center' >
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;
                return <div  className={index<=(rating || hover)?"text-amber-500":"text-black"}><FaStar
                    onClick={() => { handleClick(index); }}
                    onMouseEnter={() => { handleEnter(index); }}
                    onMouseLeave={() => { handleLeave(); }}
                   


                /></div>
            })}
        </div>
    )
}

export default Star_rating
