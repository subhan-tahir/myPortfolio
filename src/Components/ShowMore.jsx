import React from "react";

const ShowMore = ({ showProjects, totalProjects, onClick }) => {
  // Hide the button when showProjects is equal to or greater than total projects
  if (showProjects >= totalProjects) return null;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="bg-black text-white min-h-[46px] max-w-fit mx-auto my-4 border-2 border-black px-4 rounded-full hover:!bg-white hover:!text-black transition-all hover:scale-110 duration-700"
    >
      Show more
    </button>
  );
};

export default ShowMore;
