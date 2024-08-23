import React from 'react';
import logo from "../assets/logo.png";
import { mySkills } from '../script';
 import { motion } from "framer-motion";
 import { useInView } from "react-intersection-observer";

 const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,     
  });

  return (
    <div 
       ref={ref} 
      className='sm:h-screen items-center flex flex-col gap-2 max-w-7xl mx-auto sm:mt-28  mt-40' 
      id="skills"
    >
      <div className='text-2xl sm:text-4xl sm:my-12 my-14 text-center flex gap-2 items-center justify-center text-black'>
        <img src={logo} alt="Logo" className='w-[35px] h-[35px] object-contain' />
        <p className='flex gap-2'>My 
          <span className="font-extrabold">Skills</span>
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 200 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}  
        transition={{
          duration: 0.8,  
          delay: 0.2,   
            
        }}
      > *
        <div className='flex flex-wrap md:gap-12 gap-4 justify-center items-center'>
          {mySkills.map((value, index) => {
            let Icon = value.img;
            return (
              <div 
                key={index} 
                className='bg-black border-2 border-black flex flex-col gap-4 justify-around items-center rounded sm:w-40 sm:h-44 w-24 h-32 p-2 cursor-pointer !border-b-8 
                hover:!bg-stone-50 transition-all duration-300 hover:!text-black text-white'
              >
                <Icon className='text-[90px]' />
                <p className='text-[18px] font-[500] text-center'>{value.title}</p>
              </div>
            );
          })}
        </div>
      </motion.div> 
    </div>
  );
};


export default Skills
