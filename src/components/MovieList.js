import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import MovieCard from "./MovieCard";

const MovieList = ({ movies, searchInput }) => {
  const [filtredList, setfiltredList] = useState(movies);
  console.log(searchInput, movies);
  useEffect(() => {
    setfiltredList(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchInput.searchInput) &&
          movie.rating >= searchInput.searchRate
      )
    );
  }, [searchInput, movies]);

  return (
    <div>
      <Row>
        {filtredList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
