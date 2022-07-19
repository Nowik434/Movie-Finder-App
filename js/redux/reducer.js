import { combineReducers } from "redux";
import {
  GET_MOVIE,
  SEARCH_MOVIE,
  ADD_TO_WATCH,
  REMOVE_TO_WATCH,
  ADD_SCORE,
  REMOVE_SCORED,
  CHANGE_SCORE,
} from "./actions";

const initialMovies = {
  movies: [],
  movie: {},
  toWatch: [],
  scoredList: [],
};

const moviesReducer = (state = initialMovies, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIE:
      return { ...state, movies: payload.Search };
    case GET_MOVIE:
      return { ...state, movie: payload };
    case ADD_TO_WATCH:
      return { ...state, toWatch: [...state.toWatch, payload] };
    case REMOVE_TO_WATCH:
      return {
        ...state,
        toWatch: [...state.toWatch.filter((movie) => movie !== payload)],
      };
    case ADD_SCORE:
      return { ...state, scoredList: [...state.scoredList, payload] };
    case CHANGE_SCORE:
      return {
        ...state,
        scoredList: [
          ...state.scoredList.filter((movie) =>
            movie.imdbID === payload.imdbID
              ? (movie.score = payload.score)
              : movie
          ),
        ],
      };
    case REMOVE_SCORED:
      return {
        ...state,
        scoredList: [...state.scoredList.filter((movie) => movie !== payload)],
      };
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
});
