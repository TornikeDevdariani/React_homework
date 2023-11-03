import React, { useState } from "react";
import { SignIn, SignUp } from "../../api/auth";
import { BarLoader } from "react-spinners";
import { Navigate, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useAppContext } from "../../context/AppContextProvider";
import { signInAction } from "../../context/action-creators";
import "./signIn.css";
const SignInForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const { dispatch } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const clickHandler = () => {
    setIsLoading(true);
    SignIn(user)
      .then((data) => {
        dispatch(signInAction(data.token));
        navigate(routes.movies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div
      className="signInFormDiv"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          name="userName"
          placeholder="UserName"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          type="password"
          name="password"
          placeholder="Password"
        ></input>
      </div>
      <div>
        <button onClick={clickHandler}>Sign In</button>
      </div>
      <div className="signInLoader">
        <div className="Loader">
          {isLoading && (
            <BarLoader color="#36d7b7" speedMultiplier={0.5} width={300} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
