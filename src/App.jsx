import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Work from './Components/Work';
import { motion, useScroll } from "framer-motion";
import "./style.css";
import { CiDesktopMouse2 } from "react-icons/ci";
import Contact from './Components/Contact';
// import SimpleSlider from './Components/SimpleSlider';


const App = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(false);
  
  const handleShow = () => {
    setIcon(!icon);
    setShow(!show);
  };

  const handleLinkClick = () => {
    setIcon(false);
    setShow(false);
  };

    // Disable scrolling when the sidebar is open
    if (show) {
      document.body.classList.add('overflow-hidden');
     
    } else {
      document.body.classList.remove('overflow-hidden');
      
    }
  const { scrollYProgress } = useScroll();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

 
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className='h-screen overflow-x-clip'>
        <Navbar
          id="top"
          handleClick={handleLinkClick}
          toggleHandler={handleShow}
          showIcon={icon}
          sideBar={show}
          
        />

        <div>
          <Hero />
          <Skills />
          <Work />
          {/* <SimpleSlider /> */}
          <Contact />
        </div>
      </div>

      {showTopButton && (
        <a href="#top">
          <motion.div
            className='bg-black p-2 right-2 fixed bottom-0 rounded m-3 border-white border-2'
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <CiDesktopMouse2 className='text-4xl font-extrabold text-white'/>
          </motion.div>
        </a>
      )}
    </>
  );
};

export default App;
