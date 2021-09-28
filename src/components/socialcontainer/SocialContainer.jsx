import "./socialContainer.scss";

export default function SocialContainer({ spotifyURL, deezerURL, appleURL }) {
  return (
    <>
      <a href={spotifyURL} className="socialIcon">
        <img src="assets/icons/spotify.png" alt="" />
      </a>
      <a href={deezerURL} className="socialIcon">
        <img src="assets/icons/deezer.png" alt="" />
      </a>
      <a href={appleURL} className="socialIcon">
        <img src="assets/icons/apple-music.png" alt="" />
      </a>
    </>
  );
}
