import HomeSectionVideo from '../components/HomeSectionVideo/HomeSectionVideo';
import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelSImage from '../assets/thomas-pic.jpg';
import modelXImage from '../assets/arthur-pic.jpg';
import cybertruckImage from '../assets/john-pic.jpg';

export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <HomeSectionVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Thomas Shelby"
          description="Peaky Blinders"
          backgroundImage={modelSImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Arthur Shelby"
          description="Peaky Blinders"
          backgroundImage={modelXImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="John Shelby"
          description="Peaky Blinders"
          backgroundImage={cybertruckImage}
        />
      </section>
    </div>
  );
}
