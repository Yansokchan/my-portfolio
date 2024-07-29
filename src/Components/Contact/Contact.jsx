import "./Contact.css";
import call_icon from "../../assets/call.png";
import mail_icon from "../../assets/mail.png";
import location_icon from "../../assets/location.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "68a4d70f-7e45-422f-bf56-42afeed37f1c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
    );
  };

  return (
    <div id="contact" className="contact">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="contact-title"
      >
        <h1 id="h1-contact">Get in touch</h1>
      </div>
      <div className="contact-section">
        <div id="left" className="contact-left">
          <h1 data-aos="fade-right" data-aos-duration="1400">
            Let's talk
          </h1>
          <p data-aos="fade-up" data-aos-duration="1600">
            I'm currently avaliable to take on new project, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img id="mail" src={mail_icon} alt="Email" />
              <p>yansokchan05@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img id="call" src={call_icon} alt="Call" />
              <p>855+ 975948051</p>
            </div>
            <div className="contact-detail">
              <img id="loca" src={location_icon} alt="Location" />
              <p>Tboung Khmoum, Cambodia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} id="right" className="contact-right">
          <label data-aos="fade-down" data-aos-duration="1000" htmlFor="">
            Your Name
          </label>
          <input
            data-aos="fade-down"
            data-aos-duration="1000"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label data-aos="fade-left" data-aos-duration="1000" htmlFor="">
            Your Email
          </label>
          <input
            data-aos="fade-left"
            data-aos-duration="1000"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label data-aos="fade-up" data-aos-duration="1000" htmlFor="">
            write your message here
          </label>
          <textarea
            data-aos="fade-up"
            data-aos-duration="1000"
            name="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit magictime puffIn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
