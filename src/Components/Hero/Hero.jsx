import "./Hero.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        data-aos="fade-down"
        data-aos-duration="1600"
        src={profile_img}
        alt="Profile"
      />
      <h1
        id="h1-hero"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-anchor-placement="bottom-bottom"
      >
        <span>I'm Tong</span>, frontend developer based in Cambodia.
      </h1>
      <p id="p-hero" data-aos="fade-up" data-aos-duration="1400">
        I am a frontend developer from Tboung Khmoum, Cambodia with 2 months of
        experience.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div
            data-aos="fade-down-right"
            data-aos-duration="1200"
            className="hero-connect"
          >
            Connect With Me
          </div>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about">
          <div
            id="resume"
            data-aos="fade-down-left"
            data-aos-duration="1200"
            className="hero-resume"
          >
            My resume
          </div>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Hero;
