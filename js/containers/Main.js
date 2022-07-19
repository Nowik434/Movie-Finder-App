import React, { useState } from "react";
import SearchPage from "./SearchPage";
import {
  addToWatch,
  getDetails,
  searchMovie,
  addToScored,
  removeFromToWatch,
  removeFromScored,
  changeScore,
} from "../redux/actions";
import { connect } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, HashRouter } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import FavouritiesPage from "./FavouritiesPage";
import WatchedPage from "./WatchedPage";
import Spinner from "../components/Spinner";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D8A99",
    },
    secondary: {
      main: "#7C77B9",
    },
  },
});

const Main = ({
  searchMovie,
  getDetails,
  movies,
  movie,
  toWatch,
  addToWatch,
  removeFromToWatch,
  addToScored,
  removeFromScored,
  changeScore,
  scoredList,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <SearchPage
                  searchMovie={searchMovie}
                  movies={movies}
                  getDetails={getDetails}
                  addToWatch={addToWatch}
                  addToScored={addToScored}
                  scoredList={scoredList}
                />
              }
            />
            <Route path="/details">
              <Route
                path=":id"
                element={
                  isLoading ? (
                    <Spinner />
                  ) : (
                    <DetailsPage movie={movie} getDetails={getDetails} />
                  )
                }
              />
            </Route>

            <Route
              path="/to-watch"
              element={
                <FavouritiesPage
                  movies={movies}
                  toWatch={toWatch}
                  removeFromToWatch={removeFromToWatch}
                  getDetails={getDetails}
                />
              }
            />
            <Route
              path="/watched"
              element={
                <WatchedPage
                  movies={movies}
                  scoredList={scoredList}
                  removeFromScored={removeFromScored}
                  getDetails={getDetails}
                  changeScore={changeScore}
                />
              }
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (searchParam) => dispatch(searchMovie(searchParam)),
  getDetails: (id) => dispatch(getDetails(id)),
  addToWatch: (movie) => dispatch(addToWatch(movie)),
  removeFromToWatch: (movie) => dispatch(removeFromToWatch(movie)),
  addToScored: (movie, score) => dispatch(addToScored(movie, score)),
  changeScore: (movie, score) => dispatch(changeScore(movie, score)),
  removeFromScored: (movie) => dispatch(removeFromScored(movie)),
});

const mapStateToProps = (state) => (
  console.log(state),
  {
    movies: state.movies.movies,
    movie: state.movies.movie,
    toWatch: state.movies.toWatch,
    scoredList: state.movies.scoredList,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
