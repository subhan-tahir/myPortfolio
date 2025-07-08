import React, { useState, useContext } from "react";
import { myWork } from "../script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";
import { ThemeContext } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import ShowMore from "./ShowMore";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Project from "./Project";

const WorkSection = () => {
  const { mode } = useContext(ThemeContext);
  const [showProjects, setShowProjects] = useState(6);
  const [loading, setLoading] = useState(false); // Add loading state
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

  // Simulate loading when "Show More" is clicked
  const loadMoreProjects = () => {
    setLoading(true);

    // Simulate an API delay using setInterval
    setTimeout(() => {
      setShowProjects(showProjects + 3);
      setLoading(false);
    }, 1500); // Adjust the delay time here (e.g., 1500ms or 1.5s)
  };

  return (
    <Container className="max-w-[1570px]">
      <div className="flex flex-col items-center relative mb-[80px]" id="work">
        <SectionHeader title="Work" />
        <div className="justify-center gap-8 col-span-4  w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {/* Show the Skeleton if loading is true */}
          {/* {loading
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="group relative sm:w-[350px] sm:h-[350px] h-auto rounded-xl border border-white/10  px-8 py-14 shadow-xl"
                >
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={40}
                    className="mb-2"
                  />
                  <Skeleton variant="text" width="100%" height={20} />
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={50}
                    className="mt-4"
                  />
                </div>
              )):*/
            myWork.slice(0, showProjects).map((project, index) =>
             <Project key={index} project={project} index={index} />


            )
          }
        </div>

        {/* ShowMore Button */}
        <ShowMore
          onClick={loadMoreProjects}
          showProjects={showProjects}
          totalProjects={myWork.length}
        />
      </div>
    </Container>
  );
};

export default WorkSection;
