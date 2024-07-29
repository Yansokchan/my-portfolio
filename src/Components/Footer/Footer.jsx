import "./Footer.css";
import footer_icon from "../../assets/logo.png";
import user_icon from "../../assets/user.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div id="top-left" className="footer-top-left">
          <img
            data-aos="fade-right"
            data-aos-duration="1200"
            src={footer_icon}
            alt="Footer Logo"
          />
          <p data-aos="fade-left" data-aos-duration="1200">
            I am a frontend Developer from, Cambodia with 2 months experience.
          </p>
        </div>
        <div className="footer-top-right">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="footer-email-input"
          >
            <img src={user_icon} alt="User" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="footer-subscribe"
          >
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div id="bottom" className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Tong. All right reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connet with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
