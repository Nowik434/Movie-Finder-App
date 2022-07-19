import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import SingleMovie from "../components/SingleMovie";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";

export default function WatchedPage({
  searchMovie,
  getDetails,
  scoredList,
  changeScore,
  removeFromScored,
}) {
  const [filteredMovies, setFilteredMovies] = useState(scoredList);

  useEffect(() => {
    setFilteredMovies(scoredList);
  }, [scoredList]);

  return (
    <>
      <Navbar searchMovie={searchMovie} />
      <Container sx={{ py: 1, display: "flex", justifyContent: "center" }}>
        <FilterBar setFilteredMovies={setFilteredMovies} movies={scoredList} />
      </Container>
      <main>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {filteredMovies.length > 0 ? (
            <Grid container spacing={4}>
              {filteredMovies.map((movie) => (
                <SingleMovie
                  key={movie.imdbID}
                  movie={movie}
                  score={movie.score}
                  location="watched"
                  removeFromScored={removeFromScored}
                  changeScore={changeScore}
                  getDetails={getDetails}
                />
              ))}
            </Grid>
          ) : (
            <Typography variant="h6" align="center" gutterBottom>
              Musisz wyszukać film i go ocenić aby trafił do listy obejrzanych
            </Typography>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
