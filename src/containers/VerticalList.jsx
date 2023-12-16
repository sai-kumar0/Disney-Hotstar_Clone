import React from "react";
import UseFetch from "../hooks/UseFetch";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useRef } from "react";
import "../styles/App.css";
import VerticalCard from "../components/VerticalCard";

function VerticalList({ genreId, index }) {
  const elementRef = useRef(null);
  const { data, loading } = UseFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=f2cd35eceb0e7243c51ef2a14301f303&with_genres=" +
      genreId
  );
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div style={{ position: "relative" }}>
      <GoChevronLeft
        className="leftScroll VLScroll"
        onClick={() => slideLeft(elementRef.current)}
      />
      <GoChevronRight
        className="rightScroll VRScroll"
        onClick={() => slideRight(elementRef.current)}
      />
      <div key={index} className="vMovieList" ref={elementRef}>
        {data &&
          data.map((item, index) => (
            <div className="cardWrapper" key={index}>
              <VerticalCard item={item} index={index} />
              <h4>{item.title || item.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default VerticalList;
