import "./main.scss";
import { useState, useEffect } from "react";

import Topbar from "../../components/topbar/Topbar";
import Intro from "../../components/intro/Intro";
import Contact from "../../components/contact/Contact";
import Menu from "../../components/menu/Menu";
import Tracks from "../../components/tracks/Tracks";
import Events from "../../components/events/Events";
import Gallery from "../../components/gallery/Gallery";
import Testfield from "../../components/testfield/Testfield";
import CloseIcon from "@material-ui/icons/Close";
import NextEvent from "../../components/nextevent/NextEvent";
import { LinearProgress } from "@material-ui/core";

function Main() {
  const [currentMusic, setCurrentMusic] = useState("");
  const [progress, setProgress] = useState(0);
  const [isPlayingAllein, setIsPlayingAllein] = useState(false);
  const [isPlayingMotel, setIsPlayingMotel] = useState(false);
  const [isPlayingBeThere, setIsPlayingBeThere] = useState(false);
  const [isPlayingWall, setIsPlayingWall] = useState(false);
  const [isPlayingEvent, setIsPlayingEvent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentEventTrack = "Lemonade";

  const turnOffMusic = () => {
    setIsPlayingAllein(false);
    setIsPlayingMotel(false);
    setIsPlayingBeThere(false);
    setIsPlayingWall(false);
    setIsPlayingEvent(false);
    setProgress(0);
  };

  useEffect(() => {
    if (currentMusic === "") {
      turnOffMusic();
    } else if (currentMusic === "Allein") {
      turnOffMusic();
      setIsPlayingAllein(true);
    } else if (currentMusic === "Motel") {
      turnOffMusic();
      setIsPlayingMotel(true);
    } else if (currentMusic === "I'll be there") {
      turnOffMusic();
      setIsPlayingBeThere(true);
    } else if (currentMusic === "The Wall") {
      turnOffMusic();
      setIsPlayingWall(true);
    } else if (currentMusic === currentEventTrack) {
      turnOffMusic();
      setIsPlayingEvent(true);
    }
  }, [currentMusic]);
  return (
    <>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="app">
        <div className="sections">
          <Intro />
          <Tracks
            setCurrentMusic={setCurrentMusic}
            currentMusic={currentMusic}
            isPlayingAllein={isPlayingAllein}
            isPlayingMotel={isPlayingMotel}
            isPlayingBeThere={isPlayingBeThere}
            isPlayingWall={isPlayingWall}
            setProgress={setProgress}
          />
          <NextEvent
            setCurrentMusic={setCurrentMusic}
            setProgress={setProgress}
            isPlayingEvent={isPlayingEvent}
          />
          <Events />
          <Gallery />
          <Contact />
          <Testfield />
        </div>
        <div className={"musicInfo " + (currentMusic !== "" && "active")}>
          <div className="top">
            <h1>Current song:</h1>
            <div
              className="iconContainer"
              onClick={() => {
                setCurrentMusic("");
              }}
            >
              <CloseIcon className="icon" />
            </div>
          </div>
          <h2>{currentMusic}</h2>
          <LinearProgress variant="determinate" value={progress} />
        </div>
      </div>
    </>
  );
}

export default Main;
