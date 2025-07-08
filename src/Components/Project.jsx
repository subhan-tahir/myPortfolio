// GlowCard.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
const Project = ({ project, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, (value) => `${value}px`);
  const glowY = useTransform(mouseY, (value) => `${value}px`);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      animate={{ opacity: 1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glowing-card-effect group relative overflow-hidden sm:w-[350px] hover:scale-[1.05] sm:h-[350px] h-auto rounded-xl bg-black px-8 py-14 shadow-xl transition-all ease-in-out duration-500 hover:!shadow-xl hover:!shadow-black"
    >
      {/* Glow Layer */}
      <motion.div
        className="pointer-events-none absolute w-[200px] h-[200px] rounded-full bg-cyan-400/30 blur-2xl z-0"
        style={{
          top: glowY,
          left: glowX,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 p-2">
        <h1 className="sm:text-3xl text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h1>
        <p className="text-gray-300 text-[14px] sm:text-[16px]">
          {project.description}
        </p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {/* <button className="bg-white relative sm:h-12 h-10 w-full overflow-hidden border text-black font-bold transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-black before:duration-500 before:ease-out before:text-white hover:!text-white shadow-sm hover:shadow-white hover:before:h-40 hover:before:w-40 hover:before:opacity-80 hover:!bg-black">
            <FaExternalLinkAlt className="mr-2" />
            <span className="relative z-10">{project.btn}</span>
          </button> */}
          <span className="inline-flex items-center text-white"><FaExternalLinkAlt className="mr-2" /><span className="underline-style before:bg-white before:h-[3px]">Live Link</span></span>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
