import React from "react";
import UseFetch from "../hooks/UseFetch";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useRef } from "react";
import "../styles/App.css";
import MovieCard from "../components/MovieCard";
import Spinner from "react-bootstrap/Spinner";

function MovieList({ genreId }) {
  const elementRef = useRef(null);

  // Movies Api data and loading state
  const { data, loading } = UseFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=f2cd35eceb0e7243c51ef2a14301f303&with_genres=" +
      genreId
  );

  // Slider control functions
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Loading screen */}
      {loading ? (
        <div className="d-flex align-content-center justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {/* Slider controls */}
          <GoChevronLeft
            className="leftScroll"
            onClick={() => slideLeft(elementRef.current)}
          />
          <GoChevronRight
            className="rightScroll"
            onClick={() => slideRight(elementRef.current)}
          />

          {/* Movie card row */}
          <div className="movieList" ref={elementRef}>
            {data &&
              data.map((item, index) => (
                <MovieCard item={item} index={index} key={index} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MovieList;
