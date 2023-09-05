import './HomeSectionVideo.css';
import kikoVid from '../../assets/kiko-vid.mp4';

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={kikoVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Peaky Blinders</h1>
          <h4>Photo Cards Shop</h4>
        </div>
      </div>
    </div>
  );
}
