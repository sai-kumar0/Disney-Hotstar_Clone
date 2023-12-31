// All imports

import React from "react";
import "../styles/App.css";
import { FaPlay, FaPlus } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../hooks/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Carousel() {
  // Image Base URL
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  // Movies API data
  const data = useContext(DataContext);

  const elementRef = useRef(null);

  // Mini slider control functions
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div style={{ position: "relative" }}>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel part */}
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? " active" : ""}`}
                style={{ position: "relative" }}
              >
                {/* Carousel image */}
                <img
                  src={IMAGE_BASE_URL + item.backdrop_path}
                  alt={`Slide ${index + 1}`}
                  className="d-block"
                  style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                />

                {/* Movie Details */}
                <div className="carousel-caption textarea">
                  <div className="caption">
                    <h1 className="text-start title">
                      {item.title || item.name}
                    </h1>

                    <p className="text-start details">
                      <span>
                        {(item.first_air_date &&
                          item.first_air_date.slice(0, 4)) ||
                          "2021"}
                      </span>{" "}
                      | <span>{item.media_type}</span> |{" "}
                      <span>{item.original_language}</span> |{" "}
                      <span className="adult">
                        {item.adult ? "U/A 13+" : "U/A 18+"}
                      </span>
                    </p>
                    <p className="text-start overview">{item.overview}</p>

                    <div className="buttons">
                      <Link to="/SignIn" className="watchBtn d-inline-block">
                        <FaPlay className="mx-2 pb-1" />
                        Subscribe to watch
                      </Link>

                      <a href="#" className="addBtn">
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Mini Image Slider */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          marginBottom: "130px",
          marginRight: "100px",
        }}
      >
        {/* Mini slider Buttons */}
        <GoChevronLeft
          className="left"
          onClick={() => slideLeft(elementRef.current)}
        />

        <div className="mini-carousel" ref={elementRef}>
          {data &&
            data.map((item, index) => (
              <img src={IMAGE_BASE_URL + item.backdrop_path} key={index} />
            ))}
        </div>
        <GoChevronRight
          className="right"
          onClick={() => slideRight(elementRef.current)}
        />
      </div>
    </div>
  );
}

export default Carousel;
