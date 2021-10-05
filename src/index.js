import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import firebase from "firebase";
import rootReducer from "./redux/reducer";
import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyBOSStbFqkGgz6cFNnCmCvyFc6Cm1eNlrk",
  authDomain: "henning-dittrich.firebaseapp.com",
  projectId: "henning-dittrich",
  storageBucket: "henning-dittrich.appspot.com",
  messagingSenderId: "262287162776",
  appId: "1:262287162776:web:718a60016bcabf3816bfed",
  measurementId: "G-QC3BXL7SLM",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
