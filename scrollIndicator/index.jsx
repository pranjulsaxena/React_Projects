import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ScrollIndicator({url}) {

    const [Loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [errormsg , setErrormsg]  = useState(null);

    const fetchData = async()=>{
        setLoading(true);
        try{
            const response = await axios(url);
            setLoading(false);
            if(response){
                setData(response.data.products);
            }
            console.log(response.data);
        }catch(error){
            setErrormsg(error.message);
            console.log(error.message);
        }

    }
    useEffect(()=>{
        fetchData(url)
    },[url])

    if (Loading === true){return <div>Loading ...</div>}
  return (
    <div className='flex flex-col items-center gap-y-8'>
        <h1 className='text-6xl mt-7 font-bold'>Custom Scroll Indicator</h1>
        <div className='flex flex-col items-center gap-y-3'>{data && data.length>0 ?data.map((item)=>(<p className='text-2xl'>{item.title}</p>)) : null}</div>
    </div>
  )
}

export default ScrollIndicator
