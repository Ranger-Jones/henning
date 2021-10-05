import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignInScreen from "../screens/auth/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen/SignUpScreen";
import EventScreen from "../screens/EventScreen/EventScreen";
import Main from "../screens/Main/Main";
import { userAuthStateListener } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CreateEventScreen from "../screens/events/CreateEventScreen/CreateEventScreen";

export default function Routing() {
  const currentUserObj = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventScreen />} />
        <Route path="/createrave" element={<CreateEventScreen />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}
