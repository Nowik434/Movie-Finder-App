import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import SingleMovie from "../components/SingleMovie";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";

export default function SearchPage({
  searchMovie,
  movies,
  getDetails,
  addToWatch,
  addToScored,
}) {
  return (
    <>
      <CssBaseline />
      <Navbar searchMovie={searchMovie} />
      <main>
        <Container sx={{ py: 8 }} maxWidth="xl">
          <Box
            sx={{
              minHeight: "500px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {movies.length > 0 ? (
              <Grid container spacing={4}>
                {movies.map((movie) => (
                  <SingleMovie
                    movie={movie}
                    getDetails={getDetails}
                    addToWatch={addToWatch}
                    addToScored={addToScored}
                  />
                ))}
              </Grid>
            ) : (
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Zacznij wyszukiwanie filmów...
              </Typography>
            )}
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
