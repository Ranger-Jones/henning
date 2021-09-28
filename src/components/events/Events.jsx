import "./events.scss";
import Countdown from "react-countdown";
import EventContainer from "../eventcontainer/EventContainer";
import Event from "../event/Event";

export default function Events() {
  return (
    <div className="events" id="events">
      {/*<div className="headingContainer">
        <h1>Meine Events</h1>
      </div>
      <div className="nextEventContainer">
        <div className="countDownContainer">
          <Countdown date={Date.now() + 1000000000} className="countDown" />
        </div>
        <div className="eventLabelContainer">
          <h1>Nächster Rave:</h1>
          <h3>Stall Rave</h3>
        </div>
        <div className="readMoreContainer">
          <h2></h2>
        </div>
  </div>*/}

      <Event
        label="Stall Rave"
        info="28.Juni 2021"
        imgURL="assets/henning/h17.JPG"
      />
      <Event
        label="Scheunen Rave"
        info="30. August 2021"
        imgURL="assets/henning/h22.JPG"
      />
      <Event
        label="Zibbler Rave"
        info="6. Oktobter 2021"
        imgURL="assets/henning/h13.JPG"
      />
      <Event
        label="Feld Rave"
        info="12. Oktober 2021"
        imgURL="assets/henning/h31.JPG"
      />
    </div>
  );
}
