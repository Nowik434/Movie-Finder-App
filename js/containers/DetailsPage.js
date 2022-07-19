import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Details from "../components/Details";

export default function DetailsPage({ movie, getDetails }) {
  const { id } = useParams();

  useEffect(() => {
    getDetails(id);
  }, []);

  console.log("IIDD", movie);
  return (
    <>
      <Navbar />
      <main>
        <Container sx={{ py: 8 }} maxWidth="xl">
          <Details movie={movie} />
          <Grid container spacing={4}></Grid>

          <Typography variant="h6" align="center" gutterBottom>
            Detale
          </Typography>
        </Container>
      </main>
      <Footer />
    </>
  );
}
