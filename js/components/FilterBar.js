import React, { useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function FilterBar({ setFilteredMovies, movies }) {
  const [search, setSearch] = React.useState("");
  const [type, setType] = React.useState("");
  const [order, setOrder] = React.useState("");

  const filters = {
    Title: search,
    Type: type,
  };

  const filterMovies = (movies, filters) =>
    movies.filter((movie) =>
      Object.entries(filters).every(([key, value]) =>
        movie[key].includes(value)
      )
    );

  const result = filterMovies(movies, filters);

  const sort = (result) => {
    if (order === "asc") {
      return result.sort((a, b) => a.Year - b.Year).reverse();
    } else if (order === "dsc") {
      return result.sort((a, b) => a.Year - b.Year);
    } else {
      return result;
    }
  };

  useEffect(() => {
    setFilteredMovies(sort(result));
  }, [search, type, order]);

  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <TextField
          value={search}
          label="Wyszukiwanie"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          id="movie-search"
          helperText="Wyszukaj film"
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <TextField
          id="movie-type"
          placeholder="Typ filmu"
          select
          value={type}
          onChange={(e) => setType(e.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Wskaż typ filmu"
        >
          <option aria-label="None" value="" />
          <option value={"series"}>Serial</option>
          <option value={"movie"}>Film</option>
        </TextField>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <TextField
          id="demo-customized-select-native"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          placeholder="Sortuj"
          select
          SelectProps={{
            native: true,
          }}
          helperText="Sortuj według"
        >
          <option aria-label="None" value="" />
          <option value={"asc"}>Od najnowszych</option>
          <option value={"dsc"}>Od najstarszych</option>
        </TextField>
      </FormControl>
    </div>
  );
}
