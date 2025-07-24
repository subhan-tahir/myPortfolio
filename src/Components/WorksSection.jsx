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
import TabsBar from "./TabsBar";

const WorkSection = () => {
  const { mode } = useContext(ThemeContext);
  const [showProjects, setShowProjects] = useState(6);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All") // Add loading state
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
      <div className="flex flex-col items-center relative my-14" id="work">
        <SectionHeader title="Work" className="!my-5" />
        <TabsBar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="justify-center gap-8 col-span-4 w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {
            (activeTab === "All" ? myWork : myWork.filter(p => p.category === activeTab))
              .slice(0, showProjects)
              .map((project, index) => (
                <Project key={index} project={project} index={index} />
              ))
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
