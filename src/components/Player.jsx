import React from "react";
import ReactPlayer from "react-player";

const Player = ({ url }) => {
  return (
    <ReactPlayer
      url={
        url.includes("/watch?v=") ? url.replace("/watch?v=", "/embed/") : url
      }
      width="100%"
      height="calc(100vh - 100px)"
      controls
      config={{
        dailymotion: {
          params: {
            enableQueue: 0,
            enableAutoNext: 0,
          },
        },
      }}
    />
  );
};

export default Player;
