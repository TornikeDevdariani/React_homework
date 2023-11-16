import React, { useState } from "react";
import { SignUp } from "../../api/auth";
import { BarLoader } from "react-spinners";
import { Navigate, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import "./SignUp.css";
// import { useFormik } from "formik";
// import Validation from "../validation/Validation";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const clickHandler = () => {
    setIsLoading(true);
    SignUp(user)
      .then(() => {
        navigate(routes.signIn, { state: { success: true } });
        // console.log(data);
      })
      .catch((err) => {
        alert("Something went wrong. Please try again!");
        console.log(err);
      });
  };
  console.log(user);
  return (
    <form
      className="signUpFormDiv"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          name="userName"
          placeholder="UserName"
          required={true}
          id="userName"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required={true}
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required={true}
        ></input>
      </div>
      <div>
        <button onClick={clickHandler}>Sign Up</button>
      </div>
      <div className="Loader">
        {isLoading && (
          <BarLoader color="#36d7b7" speedMultiplier={0.5} width={300} />
        )}
      </div>
    </form>
  );
};

export default SignUpForm;
