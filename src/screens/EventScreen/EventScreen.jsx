import { useLocation } from "react-router";
import "./eventScreen.scss";

export default function EventScreen({ name, date, host }) {
  const location = useLocation();
  const { event } = location.state;
  console.log(event);
  return <div className="eventScreen">{name}lolol</div>;
}
