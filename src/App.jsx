import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import { motion, useScroll } from "framer-motion";
import { CiDesktopMouse2 } from "react-icons/ci";
import PortfolioPage from "./PortfolioPage";
import ScrollToTop from "./Components/ScrollToTop";
import Container from "./Components/Container";

const App = () => {
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

      <div className="h-screen overflow-x-clip">
        
          <Navbar id="top" />
        
        <div>
          <PortfolioPage />
        </div>
      </div>

      <a href="#top">
        <ScrollToTop />
      </a>
    </>
  );
};

export default App;
