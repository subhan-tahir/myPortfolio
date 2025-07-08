import React, { useContext } from 'react';
// import './marquee.css'; // custom styles for animation if needed
import logo from "../assets/logo.png"
import { ThemeContext } from '../context/ThemeContext';
// const techList = [
//   'FETCH API', 'AXIOS', 'ETHER.JS', 'WEB3 INTEGRATIONS',
//   'ETHEREUM', 'SOLANA', 'JWT', 'SOCKET.IO',
//   'ADOBE PHOTOSHOP', 'ADOBE XD', 'FIGMA'
// ];

const TechMarquee = ({ techList = [], className, bgColor, invert }) => {
    const { mode } = useContext(ThemeContext);
    return (
        <div className={`${bgColor} overflow-hidden whitespace-nowrap border-y-2 border-black  text-white text-sm sm:text-lg py-2`}>
            <div className={`flex animate-marquee ${className}`}>
                {techList.map((tech, index) => (
                    <span key={index} className="mx-5 flex items-center uppercase">
                        <img src={logo} alt="Logo" className={` ${invert} w-[25px] h-[25px]`} /> {tech}
                    </span>
                ))}
                {/* Duplicate to create loop effect */}
                {techList.map((tech, index) => (
                    <span key={`dup-${index}`} className="mx-5 uppercase">
                        <img
                            src={logo}
                            alt="Logo"
                            className={`w-[25px] h-[25px] ${mode === "dark" ? "invert" : ""
                                }`}
                        /> {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;
