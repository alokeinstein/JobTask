import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Services from "./components/pages/Services/Services";
import Contact from "./components/pages/ContactUs/Contact";
import Footer from "./components/pages/Footer/Footer";
import Header from "./components/pages/Header/Header";
import Blogs from "./components/pages/Blogs/Blogs";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
