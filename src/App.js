import React, { useState } from "react";
import MovieList from "./components/MovieList";
import movies from "./components/movieData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieHeading from "./components/MovieHeading";
import { Container } from "react-bootstrap";

const App = () => {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setSearchInput] = useState({
    searchInput: "",
    serachRate: 0,
  });
  const getInputData = (data) => {
    console.log(data);
    setMovieList([...movieList, data]);
  };
  const getSearchData = (searchData) => {
    console.log(searchData);
    setSearchInput(searchData);
  };

  return (
    <div>
      <Container>
        <MovieHeading />
        <Filter getSearchData={getSearchData} />
        <AddMovie getInputData={getInputData} />
        <MovieList searchInput={searchInput} movies={movieList} />
      </Container>
    </div>
  );
};

export default App;
