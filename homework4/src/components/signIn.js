/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Card from "./card/card";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("second");
  const isButtonDisabled =
    email === "digitalAcademy@gmail.com" && password === "iLoveReact123";
  return (
    <div>
      <h3>Please Sign In!</h3>
      <input
        placeholder="Email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        placeholder="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button disabled={!isButtonDisabled}>Sign In</button>
    </div>
  );
}

export default SignIn;
