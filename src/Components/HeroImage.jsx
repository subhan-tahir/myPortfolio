import React from "react";
import myImage from "../assets/myImage1.png"


const HeroImage = () => {
  return (
    <>
    <div className="md:w-[400px] w-[300px] md:h-[400px] h-[300px] border-4 shadow-xl shadow-black border-black dark:!border-white  rounded-full p-2">

     <img src={myImage} className="w-full h-full object-cover rounded-full"/>
    </div>
    </>
  );
};

export default HeroImage;
