import React, { useEffect, useState } from "react";
import TextField from "../../../components/general/textField/TextField";
import "./signInScreen.scss";
import { login } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector((state) => state.auth.currentUser);

  if (currentUser !== null) {
    window.location.assign("/");
  }

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login(email, password))
      .then(() => {
        console.log("register successful");
        window.location.assign("/");
      })
      .catch(() => {
        console.log("register unsuccessful");
        window.location.assign("/login");
      });
  };
  return (
    <div className="signInScreen">
      <div className="titleContainer">
        <h1>Login</h1>
      </div>
      <div className="inputContainer">
        <div className="labelContainer">
          <p className="label">Email</p>
        </div>
        <TextField setValue={setEmail} type="text" />
      </div>
      <div className="inputContainer">
        <div className="labelContainer">
          <p className="label">Password</p>
        </div>
        <TextField setValue={setPassword} type="password" />
      </div>
      <div className="submitContainer">
        <button onClick={() => handleLogin()}>
          <p>Login</p>
        </button>
      </div>
      <div className="doNotHaveAccContainer">
        <a href="/signup">Don't have an account? Create one here!</a>
      </div>
    </div>
  );
}
