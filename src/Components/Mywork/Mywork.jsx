import "./Mywork.css";
import mywork_img from "../../assets/mywork.png";
import arrow_img from "../../assets/arrow.png";
import mywork2_img from "../../assets/portfolio.png";
import rps from "../../assets/rps.png";
import cal from "../../assets/calculator.png";
const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div data-aos="fade-up" data-aos-duration="800" className="mywork-title">
        <h1 id="h1-work">My latest projects</h1>
      </div>
      <div className="mywork-container">
        <a
          href="https://yansokchan.github.io/semicolon/home.html"
          target="_blank"
        >
          <img
            data-aos="fade-right"
            data-aos-duration="1500"
            src={mywork_img}
            alt="My work"
          />
        </a>
        <a href="">
          <img
            data-aos="fade-left"
            data-aos-duration="1500"
            src={mywork2_img}
            alt="My work"
          />
        </a>
        <a
          href="https://yansokchan.github.io/RPS/rock-paper-scissors.html"
          target="_blank"
        >
          <img
            data-aos="fade-right"
            data-aos-duration="1500"
            src={rps}
            alt="My work"
          />
        </a>
        <a
          href="https://yansokchan.github.io/calculator/calculator.html"
          target="_blank"
        >
          <img
            data-aos="fade-left"
            data-aos-duration="1500"
            src={cal}
            alt="My work"
          />
        </a>
      </div>
      <div className="mywork-showmore">
        <p data-aos="fade-right" data-aos-duration="1200">
          Show more
        </p>
        <img
          data-aos="fade-left"
          data-aos-duration="1200"
          src={arrow_img}
          alt="Arrow"
        />
      </div>
    </div>
  );
};

export default Mywork;
