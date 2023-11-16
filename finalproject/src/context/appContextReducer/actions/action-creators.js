import actions from "./actions";
export const signInAction = (payload) => {
  return {
    type: actions.signIn,
    payload,
  };
};

export const signOutAction = () => {
  return {
    type: actions.signOut,
  };
};

export const fetchMoviesDataAction = (payload) => {
  return {
    type: actions.fetchMoviesData,
    payload,
  };
};
export function moviesFetchErrorAction(payload) {
  return {
    type: actions.moviesFetchError,
    payload,
  };
}
export function startMoviesFetchingLoaderAction() {
  return {
    type: actions.startMoviesFetchingLoader,
  };
}
