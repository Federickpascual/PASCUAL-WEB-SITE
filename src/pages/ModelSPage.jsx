import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelXImage from '../assets/thomas-pic.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNotext';
import thompic from '../assets/thom-pic.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

export default function CyberTruckPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Peaky Blinders"
          description="Thomas Shelby"
          backgroundImage={modelXImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={thompic} />
      </section>
      <section className="section">
        <ImageGrid
          image1={thompic}
          image2={modelXImage}
          text1="Thomas Shelby of Peaky Blinders"
          text2="This Photo-card is high definition you can buy this just add to card!"
        />
      </section>
    </div>
  );
}
