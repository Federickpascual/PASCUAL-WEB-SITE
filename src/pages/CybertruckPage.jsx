import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelSImage from '../assets/john-pic.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNotext';
import johnPeaky from '../assets/john-peaky.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

export default function CyberTruckPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Peaky Blinders"
          description="John Shelby"
          backgroundImage={modelSImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={johnPeaky} />
      </section>
      <section className="section">
        <ImageGrid
          image1={johnPeaky}
          image2={modelSImage}
          text1="John Shelby of Peaky Blinders"
          text2="This Photo-card is high definition you can buy this just add to card!"
        />
      </section>
    </div>
  );
}
