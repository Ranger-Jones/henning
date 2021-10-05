import { Link } from "react-router-dom";
import "./event.scss";

export default function Event({ event = null }) {
  if (event !== null) {
    const date = event.date.toDate();
    return (
      <div className="event">
        <img src={event.thumb} alt="" />
        <div className="labelContainer">
          <h1>{event.title}</h1>
        </div>
        <div className="moreInfoContainer">
          <h2>{date.toDateString()}</h2>
        </div>
        <div className="readMore">
          <Link path="/event" state={{ event }}>
            <h2>Read more</h2>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }
}
