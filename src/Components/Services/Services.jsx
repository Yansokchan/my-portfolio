import "./Services.css";
import arrow_img from "../../assets/arrow.png";
const Services = () => {
  return (
    <div id="services" className="services">
      <div
        data-aos="fade-down-left"
        data-aos-duration="1000"
        className="services-title"
      >
        <h1 id="h1-services">My Services</h1>
      </div>
      <div className="services-container">
        <div
          id="web"
          data-aos="fade-up-right"
          data-aos-duration="2000"
          className="services-format"
        >
          <h3>01</h3>
          <h2>Web Disign</h2>
          <p>Web development is the process od building, progamming...</p>
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="services-readmore"
          >
            <p>Read More</p>
            <img src={arrow_img} alt="Arrow" />
          </div>
        </div>
        <div
          id="graphic"
          data-aos="fade-up"
          data-aos-duration="2000"
          className="services-format"
        >
          <h3>02</h3>
          <h2>Graphic Disign</h2>
          <p>Web development is the process od building, progamming...</p>
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="services-readmore"
          >
            <p>Read More</p>
            <img src={arrow_img} alt="Arrow" />
          </div>
        </div>
        <div
          id="social"
          data-aos="fade-left"
          data-aos-duration="2000"
          className="services-format"
        >
          <h3>03</h3>
          <h2>Social media</h2>
          <p>Web development is the process od building, progamming...</p>
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="services-readmore"
          >
            <p>Read More</p>
            <img src={arrow_img} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
