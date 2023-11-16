import React, { useState } from "react";
import { SignIn, SignUp } from "../../api/auth";
import { BarLoader } from "react-spinners";
import { Navigate, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useAppContext } from "../../context/AppContextProvider";
import { signInAction } from "../../context/appContextReducer/actions/action-creators";
import { useFormik } from "formik";
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
        navigate(routes.home);
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
          id="userName"
          name="userName"
          placeholder="UserName"
          required={true}
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
          required={true}
        ></input>
      </div>
      <div>
        <button onClick={clickHandler}>Sign In</button>
      </div>
      <button
        style={{ backgroundColor: "rgba(12, 163, 163, 0.315)" }}
        onClick={() => {
          navigate(routes.signUp);
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignInForm;
