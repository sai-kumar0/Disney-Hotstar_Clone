// import { useEffect, useState } from "react";
// import axios from "axios";

// function UseFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   try {
//     useEffect(() => {
//       axios.get(url).then((resp) => setData(resp.data.results));
//       setLoading(true);
//     }, []);
//     console.log(loading);
//   } catch (error) {
//     console.log(error);
//   }
//   return data;
// }

// export default UseFetch;

import { useEffect, useState } from "react";
import axios from "axios";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      axios.get(url).then((resp) => {
        setData(resp.data.results);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [url]);

  return { data, loading };
}

export default UseFetch;

// const movieBaseUrl = "https://api.themoviedb.org/3";
// const api_key = "f2cd35eceb0e7243c51ef2a14301f303";
// const movieByGenreBaseURL =
//   "https://api.themoviedb.org/3/discover/movie?api_key=f2cd35eceb0e7243c51ef2a14301f303";
// const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
