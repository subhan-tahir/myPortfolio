import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import myImage from "../assets/myImage1.png";

const HeroImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="md:w-[400px] w-[270px] md:h-[400px] h-[270px] border-4 shadow-xl shadow-black border-black dark:!border-white  rounded-full p-2">
      {isLoading && (
        <Skeleton
          circle
          height="100%"
          width="100%"
          baseColor="#ccc"
          highlightColor="#e5e5e5"
        />
      )}
      <img
        src={myImage}
        className={`w-full h-full object-cover rounded-full ${isLoading ? "hidden" : "block"}`}
        onLoad={() => setIsLoading(false)}
        alt="hero"
      />
    </div>
  );
};

export default HeroImage;
