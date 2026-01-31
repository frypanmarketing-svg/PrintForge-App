import Image from "next/image";
import aboutHeroImage from "@/public/about-hero.png";

export default function AboutPage() {
  return (
    <>
      <section className="hero-section about-page-hero">
        <div className="hero-content-box">
          <span>About printforge</span>
          <h1 className="hero-heading">Empowering makers worldwide</h1>
          <p className="subheading">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p className="subheading">
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>

        <div>
          <Image src={aboutHeroImage} alt="About Hero Image" />
        </div>
      </section>

      <div className="usp-container container">
        <div className="usp-box">
          <div className="icon-line">
            <img src="/Stack.png"></img>
            <span>100K+ Models</span>
          </div>
          <p className="usp-text">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>

        <div className="usp-box">
          <div className="icon-line">
            <img src="/GlobeSimple.png"></img> <span>Active Community</span>
          </div>
          <p className="usp-text">
            Join thousands of makers who share tips, provide feedback, and
            collaborate on projects.
          </p>
        </div>

        <div className="usp-box">
          <div className="icon-line">
            <img src="/Flag.png"></img>
            <span>Free to Use</span>
          </div>
          <p className="usp-text">
            Most models are free to download, with optional premium features for
            power users.
          </p>
        </div>
      </div>
    </>
  );
}
