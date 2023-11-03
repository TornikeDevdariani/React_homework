import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import "./authGuard.css";

const AuthGuard = ({ children }) => {
  const {
    state: { isUserLogged },
  } = useAppContext();
  const navigate = useNavigate();
  if (!isUserLogged) {
    return (
      <div className="GuardSignDiv">
        <h2>Sign in to watch</h2>
        <button
          onClick={() => {
            navigate(routes.signIn);
          }}
        >
          Sign In
        </button>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
