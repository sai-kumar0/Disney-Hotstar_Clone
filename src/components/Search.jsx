import React from "react";
import Navbar from "./Navbar";
import Home from "../containers/Home";
import { BiSearch } from "react-icons/bi";
import Footer from "./Footer";

// Style sheets
import "../styles/style.css";
import "../styles/App.css";
import { useContext, useState, useEffect } from "react"; // Hooks
import DataContext from "../hooks/DataContext";
import MovieCard from "./MovieCard";

function Search() {
  // Movies data from API
  const data = useContext(DataContext);

  // Setting states search bar
  const [keys, setKeys] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Effects when each key pressed
  useEffect(() => {
    const filtered = data.filter(
      (movie) =>
        movie.title && movie.title.toLowerCase().includes(keys.toLowerCase())
    );
    setFilteredData(filtered);
  }, [keys, data]);

  return (
    <>
      {/* Navbar */}
      <div style={{ position: "fixed", zIndex: "3" }}>
        <Navbar />
      </div>

      {/* Search bar with icon */}
      <div className="Search col-12">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <BiSearch />
          </span>
          <input
            type="text"
            id="search"
            className="col-11"
            placeholder="Movies, Shows and more"
            autoFocus
            onChange={(e) => setKeys(e.target.value)}
          />
        </div>
      </div>

      {/* Filtered results of searchbar */}
      <div
        style={{ marginLeft: "120px" }}
        className="d-flex row-gap-5 column-gap-lg-3 flex-wrap mb-5"
      >
        {filteredData.map((item, index) => (
          <MovieCard item={item} index={index} />
        ))}
      </div>

      {/* Home content */}
      <Home list={4} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Search;
