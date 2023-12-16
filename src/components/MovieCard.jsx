import React, { useContext } from "react";
import "../styles/App.css";
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function MovieCard({ item, index }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="movies">
      <img src={IMAGE_BASE_URL + item.poster_path} key={index} />
      <div className="data">
        <div className="HButtons">
          <Link to="/SignIn" className="d-inline-block btn1 text-center">
            <FaPlay className="mx-1" style={{ fontSize: "8px" }} />
            Watch now
          </Link>
          <a href="#" className="btn2">
            <FaPlus />
          </a>
        </div>
        <p className="text-start HDetails">
          <span>
            {(item.first_air_date && item.first_air_date.slice(0, 4)) || "2021"}
          </span>{" "}
          | TV | <span>{item.original_language}</span> |{" "}
          <span>{item.adult ? "U/A 13+" : "U/A 18+"}</span>
        </p>
        <p className="text-start HoverView">{item.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
