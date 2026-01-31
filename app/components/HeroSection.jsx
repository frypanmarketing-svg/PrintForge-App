import Image from "next/image";
import heroImage from "@/public/hero-image.png";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content-box">
        <span>Your go-to platform for 3D printing files</span>
        <h1 className="hero-heading">
          Discover what’s possible with 3D printing
        </h1>
        <p className="subheading">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </p>
        <button className="hero-cta">BROWSE MODELS</button>
      </div>

      <div>
        <Image src={heroImage} alt="The hero image of the homepage" />
      </div>
    </div>
  );
}
