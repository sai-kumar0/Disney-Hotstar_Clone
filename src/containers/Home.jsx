import React from "react";
import GenreList from "../utils/GenreList";
import MovieList from "./MovieList";
import "../styles/App.css";
import VideoCards from "../utils/VideoCards";
import VerticalList from "./VerticalList";

function Home({ list }) {
  return (
    <div
      style={{
        paddingLeft: "115px",
        backgroundColor: "#0f1014",
        paddingTop: "10px",
      }}
    >
      {GenreList.GenreList.map(
        (item, index) =>
          index < list && (
            <>
              {index === 3 ? (
                <VideoCards />
              ) : index != 0 && index % 4 === 0 ? (
                <>
                  <h2 className="genreTitle">{item.name}</h2>
                  <VerticalList genreId={item.id} index={index} />
                </>
              ) : (
                <>
                  <h2 className="genreTitle">{item.name}</h2>
                  <MovieList genreId={item.id} index={index} />
                </>
              )}
            </>
          )
      )}
    </div>
  );
}

export default Home;
