import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import "../styles/App.css";
import { IoPlay } from "react-icons/io5";

// Horizontal cards

function VerticalCard({ item, index }) {
  return (
    <div className="vMovies">
      <img src={IMAGE_BASE_URL + item.backdrop_path} key={index} />
      <div className="data">
        <IoPlay />
        <p>{Math.floor(Math.random() * 59) + 1}m</p>
      </div>
    </div>
  );
}

export default VerticalCard;
