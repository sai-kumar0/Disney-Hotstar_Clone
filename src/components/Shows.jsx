import React from "react";
import { useContext } from "react";
import DataContext from "../hooks/DataContext";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Home from "../containers/Home";
import Footer from "./Footer";

function Shows() {
  // Movies API data
  const data = useContext(DataContext);
  const filtered = data.filter(
    (movie) => movie.media_type && movie.media_type == "tv"
  );
  console.log(filtered);
  return (
    <>
      {/* Navbar component */}
      <div style={{ position: "fixed", zIndex: "3" }}>
        <Navbar />
      </div>

      {/* Movie shows Component */}
      <div>
        <h2
          className="genreTitle"
          style={{ padding: "20px 0", marginLeft: "120px" }}
        >
          Shows
        </h2>
        <div
          className="d-flex row-gap-5 column-gap-lg-3 flex-wrap mb-5"
          style={{ marginLeft: "120px" }}
        >
          {filtered.map((item, index) => (
            <MovieCard item={item} index={index} />
          ))}
        </div>

        {/* Home and Footer components */}
        <Home list={4} />
        <Footer />
      </div>
    </>
  );
}

export default Shows;
