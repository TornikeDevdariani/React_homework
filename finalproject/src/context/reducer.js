import { decodeToken, toggleLocalStorage } from "../utils";
import appContextActions from "./actions";

export const initialState = {
  isUserLogged: false,
  user: {},
};

export const appContextReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case appContextActions.signIn: {
      toggleLocalStorage(actions.payload);
      const user = decodeToken(actions.payload);
      console.log(user);

      return { ...state, isUserLogged: true, user };
    }

    case appContextActions.signOut: {
      toggleLocalStorage();
      return { ...state, isUserLogged: false, user: {} };
    }
    default:
      return state;
  }
};
