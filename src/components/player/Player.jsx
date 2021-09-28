import React, { useState, useEffect } from "react";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseIcon from "@material-ui/icons/Pause";
import "./player.scss";
import { Title } from "@material-ui/icons";

const useAudio = (url, isPlaying) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  const progress = () => {
    return audio.currentTime;
  };

  useEffect(() => {
    isPlaying ? setPlaying(true) : setPlaying(false);
  }, [isPlaying]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, progress];
};

const Player = ({
  url,
  fontSize,
  setCurrentMusic,
  title,
  isPlaying,
  setProgress,
}) => {
  const [playing, toggle, progress] = useAudio(url, isPlaying, setCurrentMusic);
  let currentTime = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentTime = progress;
      setProgress(currentTime);

      console.log("Current Time outside func: " + currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick={toggle} className="player">
      {!playing ? (
        <div
          onClick={() => {
            setCurrentMusic(title);
          }}
        >
          <PlayCircleFilledWhiteIcon
            className="icon"
            style={{ fontSize: fontSize }}
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setCurrentMusic("");
          }}
        >
          <PauseIcon className="icon" style={{ fontSize: fontSize }} />
        </div>
      )}
    </div>
  );
};

export default Player;
