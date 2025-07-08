import "./style.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { motion, useScroll } from "framer-motion";
import PortfolioPage from "./PortfolioPage";
import ScrollToTop from "./Components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext"; // custom context provider
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  const { scrollYProgress } = useScroll();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setShowTopButton(latest > 0.1);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    
      <ThemeProvider>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="h-screen overflow-x-clip">
          <Navbar id="top" />
          <PortfolioPage />
        </div>
        <a href="#top">
          <ScrollToTop />
        </a>
      </ThemeProvider>
    
  );
};

export default App;
