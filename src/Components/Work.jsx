import React from 'react';
import logo from "../assets/logo.png";
import { myWork } from '../script';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Work = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
       <div className='h-screen flex flex-col justify-center items-center border' id="work"> 
        <div className='text-2xl sm:text-4xl sm:my-12 my-14  text-center flex gap-2 items-center justify-center text-black'>
          <img src={logo} alt="Logo" className='w-[35px] h-[35px] object-contain' />
          <p className='flex gap-2'>My 
            <span className="font-extrabold">Work</span>
          </p>
        </div>
        <div className="justify-center gap-6 sm:max-w-5xl w-full mx-auto">
      <Slider {...settings}>
        {myWork.map((value) => {
          return (
            <div
              className="group relative sm:w-[350px] sm:h-[350px] h-auto rounded-xl border border-white/10 bg-black px-8 py-14 shadow-xl 
                         transition-all ease-in-out duration-500 hover:!shadow-xl hover:!shadow-black"
              key={value.title}
            >
              <div className="flex flex-col gap-4 p-2">
                <h1 className="sm:text-3xl text-2xl font-bold tracking-tight text-white">
                  {value.title}
                </h1>
                <p className="text-gray-300 text-[14px] sm:text-[16px]">
                  {value.description}
                </p>
                <a href={value.link} target="_blank" rel="noopener noreferrer">
                  <button
                    className="bg-white relative sm:h-12 sm:w-40 h-8 w-32 overflow-hidden border 
                              text-black font-bold shadow-2xl transition-all 
                              duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm
                              before:bg-black before:duration-500 before:ease-out before:text-white
                              hover:!text-white hover:shadow-white hover:before:h-40 hover:before:w-40 
                              hover:before:opacity-80 hover:!bg-black"
                  >
                    <span className="relative z-10">{value.btn}</span>
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>

         </div>   
    </>
  );
}

export default Work;







