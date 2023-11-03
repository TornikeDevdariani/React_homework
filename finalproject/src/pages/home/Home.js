import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useAppContext } from "../../context/AppContextProvider";
import { signOutAction } from "../../context/action-creators";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const {
    state: { isUserLogged, user },
    dispatch,
  } = useAppContext();
  return (
    <div>
      <h2 style={{ textShadow: "0px 0px 2px" }}>Home Movie Theatre</h2>

      {!isUserLogged ? (
        <div className="signInDiv">
          <h2>please Sign in</h2>
          <div className="loginButtons">
            <div className="loginButton">
              <button
                onClick={() => {
                  navigate(routes.signIn);
                }}
              >
                Sign in
              </button>
            </div>
            <div className="signUpButton">
              <button
                onClick={() => {
                  navigate(routes.signUp);
                }}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
