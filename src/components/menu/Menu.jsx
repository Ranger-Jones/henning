import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/actions";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut()).then(() => console.log("SIGN OUT SUCCESS"));
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#aboutme">About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#tracks">Tracks</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#nextevent">Next Event</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#events">Events</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#gallery">Gallery</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#contact">Contact</a>
        </li>

        {currentUser !== null ? (
          <li onClick={() => handleSignOut()}>
            <a href="/">Sign Out</a>
          </li>
        ) : (
          <li>
            <a href="/login">Sign In</a>
          </li>
        )}
      </ul>
    </div>
  );
}
