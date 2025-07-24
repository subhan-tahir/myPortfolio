import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import { ThemeContext } from '../context/ThemeContext';
const SectionHeader = ({title,className}) => {
    const { mode } = useContext(ThemeContext);
  return (
    <div className={`text-2xl sm:text-4xl sm:my-12 my-14  text-center flex gap-2 items-center justify-center ${className}`}>
                <img
                  src={logo}
                  alt="Logo"
                  className={`w-[35px] h-[35px] object-contain ${
                    mode === "dark" ? "invert" : ""
                  }`}
                />
                <p className="flex gap-2 underline-style">
                  My
                  <span className="font-extrabold">{title}</span>
                </p>
              </div>
  )
}

export default SectionHeader