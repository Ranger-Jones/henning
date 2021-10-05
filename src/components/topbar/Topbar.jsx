import "./topbar.scss";
import { Person, Mail, Instagram, PersonOutline } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Henning Dittrich
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>882 913 021</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>contact@henning-dittrich.de</span>
          </div>
          <div
            className="itemContainer clickable"
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/henning_dittrich_official/")
            }
          >
            <Instagram className="icon" />
            <span>henning_dittrich_official</span>
          </div>
          <div className="itemContainerLast">
            <PersonOutline className="icon" />
            <span>{currentUser !== null && currentUser.email}</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
