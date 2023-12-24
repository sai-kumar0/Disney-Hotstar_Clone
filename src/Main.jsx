import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./containers/App.jsx";
import SignIn from "./components/SignIn.jsx";
import Search from "./components/Search.jsx";
import DataContext from "./hooks/DataContext.jsx";
import UseFetch from "./hooks/UseFetch.jsx";
import Shows from "./components/Shows.jsx";
import Spinner from "react-bootstrap/Spinner";
import Tv from "./components/Tv.jsx";

function Main() {
  // Movies API data and loading state
  const { data, loading } = UseFetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=f2cd35eceb0e7243c51ef2a14301f303"
  );
  return (
    // Passing data through all the child components
    <DataContext.Provider value={data}>
      {loading ? (
        <div
          className="d-flex align-content-center justify-content-center"
          style={{ marginTop: "50vh" }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <Router basename="/Disney-Hotstar_Clone">
          {/* Routes to all components */}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/movies" element={<Tv />} />
          </Routes>
        </Router>
      )}
    </DataContext.Provider>
  );
}

export default Main;
