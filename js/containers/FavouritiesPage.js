import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import SingleMovie from "../components/SingleMovie";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";

export default function FavouritiesPage({
  searchMovie,
  toWatch,
  removeFromToWatch,
  changeScore,
}) {
  const [filteredMovies, setFilteredMovies] = useState(toWatch);

  useEffect(() => {
    setFilteredMovies(toWatch);
  }, [toWatch]);

  return (
    <>
      <Navbar searchMovie={searchMovie} />
      <Container sx={{ py: 1, display: "flex", justifyContent: "center" }}>
        <FilterBar setFilteredMovies={setFilteredMovies} movies={toWatch} />
      </Container>
      <main>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {filteredMovies.length > 0 ? (
            <Grid container spacing={4}>
              {filteredMovies.map((movie) => (
                <SingleMovie
                  key={movie.imdbID}
                  movie={movie}
                  location="favourities"
                  removeFromToWatch={removeFromToWatch}
                  changeScore={changeScore}
                />
              ))}
            </Grid>
          ) : (
            <Typography variant="h6" align="center" gutterBottom>
              Musisz dodać filmy do obejrzenia aby trafił do listy ulubionych
            </Typography>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
