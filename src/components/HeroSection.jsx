import { Bio } from "../data/constants";
import images from "../images/hasna.png";
import { Typewriter } from "react-simple-typewriter";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <div id="about" className="hero-container container">
      <div className="hero-inner-container">
        {/* Left Section */}
        <div id="Left" className="hero-left-container">
          <h1>
            Hi, I am <br /> {Bio.name}
          </h1>
          <div className="intro-text">
            I am a{" "}
            <span className="typewriter-text">
              <Typewriter words={Bio.roles} loop={true} cursor />
            </span>
          </div>
          <h2>{Bio.description}</h2>

          {/* Social Icons */}
          <div className="social-icons">
            <a href={Bio.instagram}>
              <FaSquareInstagram />
            </a>
            <a href={Bio.github}>
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div id="Right" className="hero-right-container">
          <img src={images} alt="hasna.png" className="hero-img" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
