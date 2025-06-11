import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { CiDesktopMouse2 } from "react-icons/ci";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-4 z-[1000] right-10 bg-black dark:bg-white hover:scale-105 text-primaryColor flex justify-center items-center text-xl w-[70px] h-[70px] rounded-full shadow-md"
      aria-label="Scroll to top"
      title="Scroll to top"
      //   initial={{ opacity: 0, scale: 0.8 }}
      //   animate={{ opacity: 1, scale: 1 }}
      //   exit={{ opacity: 0, scale: 0.8 }}
      //   transition={{ duration: 0.3 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <CiDesktopMouse2 className="text-4xl font-extrabold text-white" />
    </motion.button>
  ) : null;
};

export default ScrollToTop;
