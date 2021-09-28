import ImgContainer from "../imgContainer/ImgContainer";
import "./gallery.scss";

export default function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="headingContainer">
        <h1>Gallerie</h1>
      </div>
      <div className="imgList">
        <div className="row">
          <ImgContainer imgURL="assets/henning/h4.jpg" />
          <ImgContainer imgURL="assets/henning/h5.jpg" />
          <ImgContainer imgURL="assets/henning/h6.jpg" />
          <ImgContainer imgURL="assets/henning/h7.jpg" />
        </div>
        <div className="row">
          <ImgContainer imgURL="assets/henning/h8.jpg" />
          <ImgContainer imgURL="assets/henning/h9.JPG" />
          <ImgContainer imgURL="assets/henning/h10.JPG" />
          <ImgContainer imgURL="assets/henning/h11.JPG" />
        </div>
        <div className="row">
          <ImgContainer imgURL="assets/henning/h12.JPG" />
          <ImgContainer imgURL="assets/henning/h13.JPG" />
          <ImgContainer imgURL="assets/henning/h14.JPG" />
          <ImgContainer imgURL="assets/henning/h15.JPG" />
        </div>
        <div className="row">
          <ImgContainer imgURL="assets/henning/h16.JPG" />
          <ImgContainer imgURL="assets/henning/h17.JPG" />
          <ImgContainer imgURL="assets/henning/h18.JPG" />
          <ImgContainer imgURL="assets/henning/h19.JPG" />
        </div>
        <div className="row">
          <ImgContainer imgURL="assets/henning/h20.JPG" />
          <ImgContainer imgURL="assets/henning/h21.JPG" />
          <ImgContainer imgURL="assets/henning/h22.JPG" />
          <ImgContainer imgURL="assets/henning/h23.JPG" />
        </div>
        <div className="row">
          <ImgContainer imgURL="assets/henning/h24.JPG" />
          <ImgContainer imgURL="assets/henning/h25.JPG" />
          <ImgContainer imgURL="assets/henning/h26.JPG" />
          <ImgContainer imgURL="assets/henning/h27.JPG" />
        </div>
        <div className="row">
          <ImgContainer imgURL="assets/henning/h28.JPG" />
          <ImgContainer imgURL="assets/henning/h29.JPG" />
          <ImgContainer imgURL="assets/henning/h30.JPG" />
          <ImgContainer imgURL="assets/henning/h31.JPG" />
        </div>
      </div>
      <a href="#contact" className="down">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
}
