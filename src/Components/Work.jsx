import React, { useState, useContext } from "react";
import { myWork } from "../script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";
import { ThemeContext } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import ShowMore from "./ShowMore";
import { Skeleton } from "@mui/material";

const Work = () => {
  const { mode } = useContext(ThemeContext);
  const [showProjects, setShowProjects] = useState(6);
  const [loading, setLoading] = useState(false); // Add loading state

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
    <Container className="max-w-[1440px]">
      <div className="flex flex-col items-center relative mb-[80px]" id="work">
        <SectionHeader title="Work" />

        <div className="justify-center gap-8 col-span-4 w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {/* Show the Skeleton if loading is true */}
          {loading
            ? [...Array(3)].map((_, index) => (
                <div key={index} className="group relative sm:w-[350px] sm:h-[350px] h-auto rounded-xl border border-white/10  px-8 py-14 shadow-xl">
                  <Skeleton variant="text" width="80%" height={40} className="mb-2" />
                  <Skeleton variant="text" width="100%" height={20} />
                  <Skeleton variant="rectangular" width="100%" height={50} className="mt-4" />
                </div>
              ))
            : myWork.slice(0, showProjects).map((project, index) => {
                return (
                  <div
                    key={index}
                    className="group relative sm:w-[350px] sm:h-[350px] h-auto rounded-xl border border-white/10 bg-black px-8 py-14 shadow-xl transition-all ease-in-out duration-500 hover:!shadow-xl hover:!shadow-black"
                  >
                    <div className="flex flex-col gap-4 p-2">
                      <h1 className="sm:text-3xl text-2xl font-bold tracking-tight text-white">
                        {project.title}
                      </h1>
                      <p className="text-gray-300 text-[14px] sm:text-[16px]">{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button
                          className="bg-white relative sm:h-12 sm:w-40 h-8 w-32 overflow-hidden border text-black font-bold shadow-2xl transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-black before:duration-500 before:ease-out before:text-white hover:!text-white hover:shadow-white hover:before:h-40 hover:before:w-40 hover:before:opacity-80 hover:!bg-black"
                        >
                          <span className="relative z-10">{project.btn}</span>
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
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

export default Work;
