import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap CSS
import "bootstrap/dist/js/bootstrap.min.js";
import Carousel from "../components/Carousel.jsx"; // Bootstrap JS
import Navbar from "../components/Navbar.jsx";
import Home from "./Home.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    // Default page container
    <>
      {/* Navbar, Carousel, Home and Footer components */}
      <div style={{ position: "fixed", zIndex: "3" }}>
        <Navbar />
      </div>
      <div>
        <Carousel />
        <Home list={14} />
        <Footer />
      </div>
    </>
  );
}

export default App;
