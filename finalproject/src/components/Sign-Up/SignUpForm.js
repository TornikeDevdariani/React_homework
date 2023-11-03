import React, { useState } from "react";
import { SignUp } from "../../api/auth";
import { BarLoader } from "react-spinners";
import { Navigate, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import "./SignUp.css";
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
        alert("User already exists!");
        console.log(err);
      });
  };
  console.log(user);
  return (
    <div
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
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          name="email"
          placeholder="Email"
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
        <button onClick={clickHandler}>Sign Up</button>
      </div>
      <div className="Loader">
        {isLoading && (
          <BarLoader color="#36d7b7" speedMultiplier={0.5} width={300} />
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
