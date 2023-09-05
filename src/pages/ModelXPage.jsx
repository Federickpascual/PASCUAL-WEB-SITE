import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelXImage from '../assets/arthur-pic.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNotext';
import artPic from '../assets/art-pic.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

export default function CyberTruckPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Peaky Blinders"
          description="Arthur Shelby"
          backgroundImage={modelXImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={artPic} />
      </section>
      <section className="section">
        <ImageGrid
          image1={modelXImage}
          image2={artPic}
          text1="Arthur Shelby of Peaky Blinders"
          text2="This Photo-card is high definition you can buy this just add to card!"
        />
      </section>
    </div>
  );
}
