import React, { useEffect, useState } from "react";
import contact_bg from "../assets/contact-bg.webp";
import logo from "../assets/logo.png";
import bulb from "../assets/bulb-pic.gif";
import eyePic from "../assets/eye-pic.gif";
import { FaLongArrowAltDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem('visitCount') || '0', 10);

    if (!sessionStorage.getItem('counted')) {
      const newCount = currentCount + 1;
      localStorage.setItem('visitCount', newCount);
      setVisitCount(newCount);
      sessionStorage.setItem('counted', 'true');
    } else {
      setVisitCount(currentCount);
    }
  }, []);

  return (
    <>
      <div
        className="w-full mt-6"
        style={{
          backgroundImage: `url(${contact_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-around items-center gap-4" id="contact">
          <div className="text-2xl sm:text-4xl sm:my-12 my-14 text-center flex gap-2 text-white">
            <img
              src={logo}
              alt="Logo"
              className="w-[35px] h-[35px] filter invert"
            />
            <p className="flex gap-2">
              Contact<span className="font-extrabold">Me</span>
            </p>
          </div>

          <div className="text-white mt-16 flex gap-6 sm:gap-10 justify-center flex-col items-center">
            <img src={bulb} alt="" className="w-full filter invert" />
          </div>

          <div className="text-white">
            <h1 className="text-2xl sm:text-4xl text-center font-sans">
              Got a new project idea?
            </h1>
            <h1 className="text-4xl sm:text-6xl font-black text-center font-sans">
              Let's Discuss!
            </h1>
          </div>

          <motion.div 
            animate={{
              y: [0,-15,0], 
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="text-white text-6xl">
              <FaLongArrowAltDown />
            </div>
          </motion.div>

          <div className="py-6 px-12 bg-white rounded-lg">
            <div className="flex sm:flex-row flex-col gap-4 sm:text-4xl text-2xl font-extrabold">
              <a href="https://wa.me/+923198991271" target="_blank" rel="noopener noreferrer">
                <h1 className="font-semibold">Whatsapp</h1>
              </a>
              <a href="https://www.linkedin.com/in/subhan-tahir-471215307/" target="_blank">
                <h1 className="font-semibold">Linkedin</h1>
              </a>
              <a href="mailto:subhantahir2006@gmail.com">
                <h1 className="font-semibold">Email</h1>
              </a>
              <a href="https://github.com/subhan-tahir" target="_blank">
                <h1 className="font-semibold">Github</h1>
              </a>
            </div>
          </div>

          <div className="rounded-lg py-3 px-6 mx-auto my-8 bg-white text-black flex flex-col gap-4 items-center justify-center">
            <img src={eyePic} alt="" />
            <p className="text-lg font-bold">
              Visitors: {visitCount}
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full text-black bg-white p-6 text-center text-[10px] font-bold sm:text-[18px]">
        Copyright © 2024 (Designed & Developed by Muhammad Subhan)
      </div>
    </>
  );
};

export default Contact;

