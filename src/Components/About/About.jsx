import "./About.css";
import pf_img from "../../assets/profile.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1 id="h1-about" data-aos="fade-down-right" data-aos-duration="700">
          About Me
        </h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            data-aos="fade-up-right"
            data-aos-duration="1200"
            src={pf_img}
            alt="Profile"
          />
        </div>
        <div className="about-right">
          <div id="p-about" className="about-p">
            <p data-aos="fade-left" data-aos-duration="800">
              <span>Tong</span> is my nickname, I graduated from high school in
              2023, and I'm currently studying in the basic year of the Computer
              Science Department at Royal University Of Phnom Penh.
            </p>
            <p data-aos="fade-up" data-aos-duration="900">
              My passion for frontend developer is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div id="p-skill-about" className="about-skills">
            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              className="about-skill"
            >
              <p>HTML & CSS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="about-skill"
            >
              <p>Javascript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="about-skill"
            >
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div id="ach-about" className="about-achievements">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="about-achievement"
        >
          <h1>1+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="about-achievement"
        >
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="about-achievement"
        >
          <h1>7+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
