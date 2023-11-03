import React from "react";
import "./SignIn.css";
import { useLocation } from "react-router-dom";
import SignInForm from "../../components/Sign-In/SignInForm";
const SignIn = () => {
  const location = useLocation();
  return (
    <div>
      {location?.state?.success && (
        <h1 style={{ color: "green" }}>
          Congratulations! You registered successfully
        </h1>
      )}

      <div className="SignInDiv">
        <h1>Sign In</h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
