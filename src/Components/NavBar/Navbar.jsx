import "./Navbar.css";
import { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import menuopen from "../../assets/openmenu.png";
import menuclose from "../../assets/closemenu.png";
import go from "../../assets/go.png";
import sky from "../../assets/sky.png";
import moon from "../../assets/moon.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import call from "../../assets/telephoneB.png";
import loca from "../../assets/locationB.png";
import mail from "../../assets/mailB.png";
import call_icon from "../../assets/call.png";
import mail_icon from "../../assets/mail.png";
import location_icon from "../../assets/location.png";
import menub from "../../assets/more.png";
import menuw from "../../assets/openmenu.png";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  let menuRef = useRef();
  return (
    <div id="nav-bar" className="nav-bar">
      <img src={logo} alt="Logo" />
      <img
        id="open"
        src={menuopen}
        onClick={() => {
          menuRef.current.style.right = "0";
        }}
        alt="Menu Open"
        className="nav-mob-open"
      />
      <ul id="nav-menu" ref={menuRef} className="nav-menu">
        <img
          src={menuclose}
          onClick={() => {
            menuRef.current.style.right = "-350px";
          }}
          alt="Menu Close"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              id="home-dark"
              onClick={() => {
                menuRef.current.style.right = "-350px";
                setMenu("home");
              }}
            >
              Home
            </p>
            {menu === "home" ? <img src={go} /> : <></>}
          </AnchorLink>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              id="about-dark"
              onClick={() => {
                menuRef.current.style.right = "-350px";
                setMenu("about");
              }}
            >
              About Me
            </p>
            {menu === "about" ? <img src={go} /> : <></>}
          </AnchorLink>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              id="services-dark"
              onClick={() => {
                menuRef.current.style.right = "-350px";
                setMenu("services");
              }}
            >
              Services
            </p>
            {menu === "services" ? <img src={go} /> : <></>}
          </AnchorLink>
          {menu === "services" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              id="work-dark"
              onClick={() => {
                menuRef.current.style.right = "-350px";
                setMenu("work");
              }}
            >
              Portfolio
            </p>
            {menu === "work" ? <img src={go} /> : <></>}
          </AnchorLink>
          {menu === "work" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              id="contact-dark"
              onClick={() => {
                menuRef.current.style.right = "-350px";
                setMenu("contact");
              }}
            >
              Contact
            </p>
            {menu === "contact" ? <img src={go} /> : <></>}
          </AnchorLink>
          {menu === "contact" ? <hr /> : <></>}
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
      <div
        id="dark"
        className="dark"
        onClick={() => {
          let icon = document.getElementById("icon");
          document.body.classList.toggle("dark-mode");
          document.getElementById("nav-bar").classList.toggle("nav-bar-dark");
          document.getElementById("dark").classList.toggle("dark-nav");
          document.getElementById("nav-menu").classList.toggle("nav-menu-dark");
          document.getElementById("h1-hero").classList.toggle("h1-hero");
          document.getElementById("p-hero").classList.toggle("p-hero");
          document.getElementById("home-dark").classList.toggle("home-nav");
          document.getElementById("about-dark").classList.toggle("about-nav");
          document
            .getElementById("services-dark")
            .classList.toggle("services-nav");
          document.getElementById("work-dark").classList.toggle("work-nav");
          document
            .getElementById("contact-dark")
            .classList.toggle("contact-nav");
          document.getElementById("resume").classList.toggle("resume-nav");
          document.getElementById("h1-about").classList.toggle("h1-nav");
          document.getElementById("p-about").classList.toggle("p-nav");
          document
            .getElementById("p-skill-about")
            .classList.toggle("p-skill-nav");
          document.getElementById("ach-about").classList.toggle("ach-nav");
          document.getElementById("h1-services").classList.toggle("h1-nav");
          document.getElementById("web").classList.toggle("web-nav");
          document.getElementById("graphic").classList.toggle("graphic-nav");
          document.getElementById("social").classList.toggle("social-nav");
          document.getElementById("h1-work").classList.toggle("h1-nav");
          document.getElementById("h1-contact").classList.toggle("h1-nav");
          document.getElementById("left").classList.toggle("left-nav");
          document.getElementById("right").classList.toggle("right-nav");
          document.getElementById("top-left").classList.toggle("top-left-nav");
          document.getElementById("bottom").classList.toggle("bottom-nav");
          if (document.body.classList.contains("dark-mode")) {
            document.getElementById("mail").src = mail;
            document.getElementById("call").src = call;
            document.getElementById("loca").src = loca;
            document.getElementById("open").src = menub;
            icon.src = moon;
          } else {
            document.getElementById("mail").src = mail_icon;
            document.getElementById("call").src = call_icon;
            document.getElementById("loca").src = location_icon;
            document.getElementById("open").src = menuw;
            icon.src = sky;
          }
        }}
      >
        <img id="icon" src={sky} alt="Sky" />
      </div>
    </div>
  );
};

export default Navbar;
