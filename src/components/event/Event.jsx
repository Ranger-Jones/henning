import "./event.scss";

export default function Event({ label, info, imgURL }) {
  return (
    <div className="event">
      <img src={imgURL} alt="" />
      <div className="labelContainer">
        <h1>{label}</h1>
      </div>
      <div className="moreInfoContainer">
        <h2>{info}</h2>
      </div>
      <div className="readMore">
        <h2>Read more</h2>
      </div>
    </div>
  );
}
