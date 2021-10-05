import React, { useEffect, useState } from "react";
import TextField from "../../../components/general/textField/TextField";
import "./signUpScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector((state) => state.auth.currentUser);

  if (currentUser !== null) {
    window.location.assign("/");
  }
  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(register(email, password))
      .then(() => {
        console.log("register successful");
        window.location.assign("/");
      })
      .catch(() => {
        console.log("register unsuccessful");
        window.location.assign("/signup");
      });
  };
  return (
    <div className="signInScreen">
      <div className="titleContainer">
        <h1>Sign Up</h1>
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
        <button onClick={() => handleRegister()}>
          <p>Sign Up</p>
        </button>
      </div>
      <div className="doNotHaveAccContainer">
        <a href="/signup">Already have an account? Login here!</a>
      </div>
    </div>
  );
}
