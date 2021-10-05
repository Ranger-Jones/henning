import "./events.scss";
import Countdown from "react-countdown";
import EventContainer from "../eventcontainer/EventContainer";
import Event from "../event/Event";
import { useSelector } from "react-redux";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import HorizontalScroll from "react-scroll-horizontal";

export default function Events() {
  const events = useSelector((state) => state.events.allUsersEvents);

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
      <HorizontalScroll
        className="scrollContainer"

      >
        {events !== null && events.map((event) => <Event event={event} />)}
      </HorizontalScroll>
    </div>
  );
}
