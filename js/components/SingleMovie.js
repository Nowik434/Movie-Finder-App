import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StarRating from "./StarRating";
import FavouriteCheckbox from "../components/FavouriteCheckbox";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SingleMovie({
  movie,
  getDetails,
  addToWatch,
  removeFromToWatch,
  addToScored,
  score,
  removeFromScored,
  location,
  changeScore,
}) {
  return (
    <Grid item key={movie} xs={12} sm={6} md={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link
          to={`/details/${movie.imdbID}`}
          onClick={() => getDetails(movie.imdbID)}
          style={{ textDecoration: "none" }}
        >
          <CardMedia component="img" image={movie.Poster} alt="random" />
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.Title}
          </Typography>
          <Typography gutterBottom variant="h8" component="h5">
            {movie.Year}
          </Typography>
          <Stack direction="row" spacing={2}>
            {location === "favourities" && (
              <>
                <StarRating
                  movie={movie}
                  addToScored={changeScore}
                  score={score}
                />
                <IconButton
                  aria-label="delete"
                  onClick={() => removeFromToWatch(movie)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            )}
            {location === "watched" && (
              <>
                <StarRating
                  movie={movie}
                  addToScored={changeScore}
                  score={score}
                />
                <IconButton
                  aria-label="delete"
                  onClick={() => removeFromScored(movie)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            )}
            {!location && (
              <>
                <StarRating
                  movie={movie}
                  addToScored={addToScored}
                  score={score}
                />
                <FavouriteCheckbox movie={movie} addToWatch={addToWatch} />
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
