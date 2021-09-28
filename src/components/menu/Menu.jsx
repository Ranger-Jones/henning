import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
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
      </ul>
    </div>
  );
}
