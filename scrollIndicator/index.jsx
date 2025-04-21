import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ScrollIndicator({ url }) {

    const [Loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [errormsg, setErrormsg] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(null);


    const fetchData = async () => {

        try {
            setLoading(true);
            const response = await axios(url);
            setLoading(false);
            if (response) {
                setData(response.data.products);
            }
            console.log(response.data);
        } catch (error) {
            setLoading(false);
            setErrormsg(error.message);
            console.log(error.message);
        }

    }

    const handleScrollpercentage = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );
        const totalScrolled = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log((totalScrolled / scrollHeight) * 100);
        setScrollPercentage((totalScrolled / scrollHeight) * 100);
    };

    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollpercentage);

        return () => {
            window.removeEventListener("scroll", handleScrollpercentage);
        };
    }, []);

    if (Loading === true) { return <div>Loading ...</div> }
    if (errormsg) {
        return <div>{errormsg}</div>
    }
    return (
        <div className='flex flex-col items-center gap-y-8'>
        <div className='w-full fixed'>
            <h1 className='text-6xl  font-bold text-center bg-black text-white py-4'>Custom Scroll Indicator</h1>
            <div className={`h-8  bg-amber-700 left-0 top-[130px] z-50 transition-all duration-200`} style={{ width: `${scrollPercentage}%` }} ></div>
        </div>
            <div className='flex flex-col items-center gap-y-3'>{data && data.length > 0 ? data.map((item) => (<p className='text-2xl'>{item.title}</p>)) : null}</div>
        </div>
    )
}

export default ScrollIndicator
