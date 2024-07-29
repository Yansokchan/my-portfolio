import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Mywork from "./Components/Mywork/Mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./index.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
