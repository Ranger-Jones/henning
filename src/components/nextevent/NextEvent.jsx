import "./nextEvent.scss";
import Countdown from "react-countdown";
import Player from "../player/Player";

export default function NextEvent({
  setCurrentMusic,
  isPlayingEvent,
  setProgress,
}) {
  return (
    <div className="nextEvent" id="nextevent">
      <img src="assets/party/p2.JPG" alt="" />
      <div className="player">
        <h2>Song of the Rave:</h2>
        <Player
          fontSize={80}
          url="assets/music/lemonade.mp3"
          color=""
          title="Lemonade"
          isPlaying={isPlayingEvent}
          setCurrentMusic={setCurrentMusic}
          setProgress={setProgress}
        />
      </div>
      <div className="countDownContainer">
        <h1>Next Rave:</h1>
        <Countdown date={Date.now() + 1000000000} className="countDown" />
        <h2>Großer BB Rave</h2>

        <a href="">Jetzt Anmelden</a>
      </div>
    </div>
  );
}
