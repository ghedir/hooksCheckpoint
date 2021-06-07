import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import App from "./App";

import Movies from "./components/movieData";
import MovieDetail from "./components/MovieDetail";

const RoutingComponent = () => {
  const [movieList, setMovieList] = useState(Movies);
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => <App movies={movieList} setMovies={setMovieList} />}
      />
      <Route
        exact
        path="/detail/:id"
        render={(props) => (
          <MovieDetail {...props} movies={movieList}></MovieDetail>
        )}
      ></Route>
    </Switch>
  );
};

export default RoutingComponent;
