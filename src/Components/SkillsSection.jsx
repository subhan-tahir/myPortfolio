import React, { useContext } from "react";
import { mySkills } from "../script";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="items-center flex flex-col gap-2 max-w-7xl mx-auto my-14 p-4"
      id="skills"
    >
      {/*header */}
      <SectionHeader title="Skills" />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <div className="flex flex-wrap md:gap-12 gap-4 justify-center items-center">
          {mySkills.map((value, index) => {
            let Icon = value.img;
            return (
              <div
                key={index}
                className="bg-black  hover:!border-black dark:hover:!border-white !border-b-8 flex flex-col gap-4 justify-around items-center rounded sm:w-40 sm:h-44 w-24 h-32 p-2 cursor-pointer  
                hover:!bg-stone-50 transition-all duration-300 hover:!text-black text-white group"
              >
                {typeof Icon === "function" ? (
                  <Icon className="text-[90px]" />
                ) : (
                  <img
                    src={Icon}
                    alt={value.title}
                    className="w-16 h-16 filter invert group-hover:filter-none"
                  />
                )}

                <p className="text-[18px] font-[500] text-center">
                  {value.title}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSection;
