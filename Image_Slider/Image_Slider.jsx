import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


function Image_Slider({ url, limit, page }) {
  const [Images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await axios(`${url}?page=${page}&limit=${limit}`);
      console.log(response.data);
      setImages(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  const handleleftClick = () => {
    setCurrentSlide(currentSlide === 0 ? Images.length-1: currentSlide-1);
  }
  const handlelrightClick = () => {
    setCurrentSlide(currentSlide===Images.length-1 ?0: currentSlide + 1);
  }
  const handlebuttonClick=(index)=>{
    setCurrentSlide(index);
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (Loading) {
    return <div>Loading ...</div>;
  }

  if (error != null) {
    return <div>Error Occured!!!{error}</div>;
  }
  return (
    <div className="flex w-[600px] h-[450px]  items-center  relative">
      <div>
        <FaArrowCircleLeft onClick={()=>{handleleftClick();}} className="cursor-pointer absolute w-8 h-8 text-white left-4" />
      </div>
      {Images && Images.length > 0
        ? [
          Images.map((items,index) => (
            <img
              className={`w-full h-full rounded-lg ${currentSlide !== index ?'hidden':''}`}
              key={items.id}
              src={items.download_url}
              alt={items.download_url}
            ></img>
          )),
        ]
        : null}
      <FaArrowCircleRight onClick={()=>{handlelrightClick();}} className="cursor-pointer absolute  w-8 h-8 text-white right-4" />
      <span className="flex items-center justify-center absolute bottom-4 left-10">
        {Images && Images.length > 0
          ? Images.map((_, index) => (
            <button
              onClick={()=>{handlebuttonClick(index)}}
              key={index}
              className={`font-bold rounded-xl text-[70px] cursor-pointer ${currentSlide === index ? ' text-white':'text-slate-400'}`}
            >
              .
            </button>
          ))
          : null}
      </span>
    </div>
  );
}

export default Image_Slider;
