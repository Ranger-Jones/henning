import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Ingersleben",
        "Germany",
        "Europe",
        "the World",
        "the sun system",
        "the milkyway",
        "the universe",
      ],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);
  return (
    <>
      <div className="intro" id="intro">
        <div className="right">
          {/*
          <div className="socialMedia">
            <div className="icon">
              <a href="https://www.youtube.com/channel/UC4f2e-dMq-G03Lyaj1ZPB_Q/featured">
                <img src="assets/youtube.png" alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.youtube.com">
                <img src="assets/youtube.png" alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.youtube.com">
                <img src="assets/youtube.png" alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="">
                <img src="assets/youtube.png" alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="">
                <img src="assets/youtube.png" alt="" />
              </a>
            </div>
          </div>
          */}
          <div className="wrapper">
            <h2>DJ - Musiker - Eventplaner</h2>
            <h1>Henning Dittrich</h1>
            <h3>
              Best DJ in <span ref={textRef}></span>
            </h3>
            <a href="#aboutme" className="down">
              <img src="assets/down.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
