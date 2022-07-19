import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function FavouriteCheckbox({ movie, addToWatch }) {
  console.log("from favourite checkbox", movie, addToWatch);
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onClick={() => addToWatch(movie)}
      />
    </div>
  );
}
