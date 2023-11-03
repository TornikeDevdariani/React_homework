import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useAppContext } from "../../context/AppContextProvider";
import { signOutAction } from "../../context/action-creators";
import "./navBar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const {
    state: { isUserLogged, user },
    dispatch,
  } = useAppContext();
  return (
    <nav style={{ position: "relative", zIndex: "999" }}>
      <div className="nav">
        <div className="leftNav">
          <button
            onClick={() => {
              navigate(routes.home);
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate(routes.movies);
            }}
          >
            Movies
          </button>
          <button
            onClick={() => {
              navigate(routes.series);
            }}
          >
            Series
          </button>
        </div>
        <div className="rightnav">
          {!isUserLogged ? (
            <div className="rightNavLoggedOut">
              <button
                id="rightNavSign"
                onClick={() => {
                  navigate(routes.signIn);
                }}
              >
                Sign In
              </button>
              <button
                style={{ backgroundColor: "rgba(12, 163, 163, 0.315)" }}
                onClick={() => {
                  navigate(routes.signUp);
                }}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div style={{ display: "flex" }} className="rightNavLogged">
              <p>{user.userName}</p>
              <button
                id="signOutBtn"
                onClick={() => {
                  dispatch(signOutAction());
                }}
                className="SignOutButton"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className="navline"
        style={{
          marginTop: "10px",
          backgroundColor: "rgb(12, 163, 163)",
          width: "95%",
          height: "2px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
