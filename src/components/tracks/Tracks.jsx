import "./tracks.scss";
import React, { useState, useEffect } from "react";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import ReactVideo from "react-player";

import Player from "../player/Player";
import SocialContainer from "../socialcontainer/SocialContainer";

export default function Tracks({
  setCurrentMusic,
  currentMusic,

  isPlayingAllein,
  isPlayingMotel,
  isPlayingBeThere,
  isPlayingWall,
  setProgress,
}) {
  return (
    <>
      <div className="tracks" id="tracks">
        <h1>Musik von mir</h1>
        <h2>Auf allen Plattformen verfügbar</h2>
        <div className="tracklist">
          <div className="item">
            <div>
              <div className="socialContainer">
                <SocialContainer />
              </div>
              <div className="iconContainer">
                <Player
                  url={"assets/music/allein.mp3"}
                  fontSize={75}
                  setCurrentMusic={setCurrentMusic}
                  title="Allein"
                  isPlaying={isPlayingAllein}
                  setProgress={setProgress}
                />
              </div>
              <div className="imgContainer">
                <img src="assets/tracks/allein.JPEG" alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div>
              <div className="socialContainer">
                <SocialContainer />
              </div>
              <div className="iconContainer">
                <Player
                  url={"assets/music/motel.mp3"}
                  fontSize={75}
                  setCurrentMusic={setCurrentMusic}
                  title="Motel"
                  isPlaying={isPlayingMotel}
                  setProgress={setProgress}
                />
              </div>
              <div className="imgContainer">
                <img src="assets/tracks/motel.JPG" alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div>
              <div className="socialContainer">
                <SocialContainer />
              </div>
              <div className="iconContainer">
                <Player
                  url={"assets/music/bethere.mp3"}
                  fontSize={75}
                  setCurrentMusic={setCurrentMusic}
                  title="I'll be there"
                  isPlaying={isPlayingBeThere}
                  setProgress={setProgress}
                />
              </div>
              <div className="imgContainer">
                <img src="assets/tracks/bethere.JPEG" alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div>
              <div className="socialContainer">
                <SocialContainer />
              </div>
              <div className="iconContainer">
                <Player
                  url={"assets/music/thewall.mp3"}
                  fontSize={75}
                  setCurrentMusic={setCurrentMusic}
                  title="The Wall"
                  isPlaying={isPlayingWall}
                  setProgress={setProgress}
                />
              </div>
              <div className="imgContainer">
                <img src="assets/tracks/wall.JPG" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
