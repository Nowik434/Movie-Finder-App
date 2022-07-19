import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Details({ movie }) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 260, display: { xs: "none", sm: "block" } }}
            image={movie.Poster}
            alt={movie.Title}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {movie.Title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {movie.Year}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {movie.Director}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {movie.Plot}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Details.propTypes = {
  movie: PropTypes.shape({
    Plot: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;
