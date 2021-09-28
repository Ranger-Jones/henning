import "./imgContainer.scss";

export default function ImgContainer({ imgURL, label }) {
  return (
    <div className="imgContainer">
      <div className="label">
        <h1>{label}</h1>
      </div>
      <img src={imgURL} alt="" />
    </div>
  );
}
