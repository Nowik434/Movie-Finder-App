import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function StarRating({ addToScored, movie, score }) {
  const [value, setValue] = React.useState(score);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        alignSelf: "center",
        flexGrow: 1,
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          addToScored(movie, newValue);
        }}
      />
    </Box>
  );
}
