import React from "react";
import coderVideo from "../assets/coderVideo.mp4";

const HeroVideo = () => {
  return (
    <>
      <video
        src={coderVideo}
        autoPlay
        loop
        muted
        onLoadedData={() => setIsLoading(false)}
      ></video>
    </>
  );
};

export default HeroVideo;
