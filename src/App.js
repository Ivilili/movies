import React, { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";

import "./App.scss";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  const [series, setSeries] = useState([]);
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const getSeries = async () => {
    await fetch(
      `https://imdb-api.com/en/API/SearchSeries/${process.env.REACT_APP_API_KEY}/${search}`
    )
      .then((res) => res.json())
      .then((data) => setSeries(data.results));
  };

  const getDetails = async (id) => {
    await fetch(
      `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY}/${id}/FullActor,FullCast,Posters,Images,Ratings,`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };

  useEffect(() => {
    getSeries();
  }, [search]);

  //console.log("series", series);
  console.log("details", details);

  return (
    <div className="App">
      <h1 className="App__title">React Movies</h1>
      <Search setSearch={setSearch} />
      <div className="App__container">
        {series &&
          series.length !== 0 &&
          series.map((item) => (
            <Movie
              id={item?.id}
              title={item?.title}
              description={item?.description}
              image={item?.image}
              getDetails={getDetails}
              toggle={() => setOpen(!open)}
              open={open}
            />
          ))}
        <MovieDetails
          open={open}
          toggle={() => setOpen(!open)}
          details={details}
        />
      </div>
    </div>
  );
}

export default App;
