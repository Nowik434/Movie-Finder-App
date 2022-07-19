const SEARCH_MOVIE = "SEARCH_MOVIE";
const GET_MOVIE = "GET_MOVIE";
const ADD_TO_WATCH = "ADD_TO_WATCH";
const ADD_SCORE = "ADD_SCORE";
const REMOVE_TO_WATCH = "REMOVE_TO_WATCH";
const REMOVE_SCORED = "REMOVE_SCORED";
const CHANGE_SCORE = "CHANGE_SCORE";
const API_URL = "https://www.omdbapi.com/?apikey=b720508b";

const searchMovie = (searchParams) => async (dispatch) => {
  const req = await fetch(`${API_URL}&s=${searchParams}`);
  const res = await req.json();
  console.log(res, searchParams);
  if (res.Response == "True") {
    dispatch({
      type: SEARCH_MOVIE,
      payload: res,
    });
  }
};

const getDetails = (id) => async (dispatch) => {
  const req = await fetch(`${API_URL}&i=${id}`);
  const res = await req.json();
  console.log(res);
  if (res.Response == "True") {
    dispatch({
      type: GET_MOVIE,
      payload: res,
    });
  }
};

const addToWatch = (movie) => ({
  type: ADD_TO_WATCH,
  payload: movie,
});

const removeFromToWatch = (movie) => ({
  type: REMOVE_TO_WATCH,
  payload: movie,
});

const addToScored = (movie, score) => ({
  type: ADD_SCORE,
  payload: { ...movie, score: score },
});

const changeScore = (movie, score) => ({
  type: CHANGE_SCORE,
  payload: { ...movie, score: score },
});

const removeFromScored = (movie) => ({
  type: REMOVE_SCORED,
  payload: movie,
});

export {
  SEARCH_MOVIE,
  GET_MOVIE,
  ADD_TO_WATCH,
  REMOVE_TO_WATCH,
  ADD_SCORE,
  REMOVE_SCORED,
  CHANGE_SCORE,
  searchMovie,
  getDetails,
  addToWatch,
  addToScored,
  removeFromToWatch,
  removeFromScored,
  changeScore,
};
