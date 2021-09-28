import "./testfield.scss";
import Event from "../event/Event";

export default function Testfield() {
  return (
    <div className="testfield">
      <Event label="Stall Rave" imgURL="assets/henning/h16.JPG" />
      <Event label="Stall Rave" imgURL="assets/henning/h19.JPG" />
      <Event label="Stall Rave" imgURL="assets/henning/h29.JPG" />
      <Event label="Stall Rave" imgURL="assets/henning/h27.JPG" />
    </div>
  );
}
