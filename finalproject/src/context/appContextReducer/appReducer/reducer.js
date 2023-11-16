import { decodeToken, toggleLocalStorage } from "../../../utils";
import appContextActions from "../actions/actions";

export const initialState = {
  isUserLogged: false,
  user: {},
  movies: [],
  isMoviesDataFetching: false,
  fetchMoviesError: "",
};

export const appContextReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case appContextActions.signIn: {
      toggleLocalStorage(actions.payload);
      const user = decodeToken(actions.payload);

      return { ...state, isUserLogged: true, user };
    }

    case appContextActions.signOut: {
      toggleLocalStorage();
      return { ...state, isUserLogged: false, user: {} };
    }

    case appContextActions.fetchMoviesData: {
      return {
        ...state,
        movies: actions.payload,
        isMoviesDataFetching: false,
      };
    }
    case appContextActions.moviesFetchError: {
      return {
        ...state,
        moviesFetchError: actions.payload,
        isMoviesDataFetching: false,
      };
    }
    case appContextActions.startMoviesFetchingLoader: {
      return {
        ...state,
        isMoviesDataFetching: true,
      };
    }
    default:
      return state;
  }
};
