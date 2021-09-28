import "./eventContainer.scss";

export default function EventContainer({ url, imgURL, title, date }) {
  return (
    <div className="eventContainer">
      <div className="eventImage">
        <img src={imgURL} alt="" />
      </div>
      <div className="eventLabelContainer">
        <h1>{title}</h1>
        <h3>{date}</h3>
      </div>
      <div className="readMore">
        <a href={url}>
          <h2>Mehr erfahren</h2>
        </a>
      </div>
    </div>
  );
}
