import { fetchMovies } from "../../../api/moviesApi";
import {
  moviesFetchErrorAction,
  startMoviesFetchingLoaderAction,
  fetchMoviesDataAction,
} from "../actions/action-creators";

export function fetchInitialMoviesData(dispatch) {
  dispatch(startMoviesFetchingLoaderAction());
  fetchMovies()
    .then((result) => {
      dispatch(fetchMoviesDataAction(result));
    })
    .catch((err) => {
      dispatch(moviesFetchErrorAction(err.message));
    });
}
