import firebase from "firebase";
import { saveMediaToStorage } from "../../services/random";
import uuid from "uuid-random";
import {
  ALL_USERS_OF_THE_EVENT,
  CURRENT_LOOKING_EVENT_CHANGE,
  ALL_USERS_EVENTS_UPDATE,
} from "../constants";
require("firebase/firebase-auth");
require("firebase/firestore");

export const createRave =
  (title, location, description = "", date, thumbnail) =>
  (dispatch) =>
    new Promise((resolve, reject) => {
      let storagePostId = uuid() + date.getMilliseconds();
      saveMediaToStorage(
        thumbnail,
        `events/${firebase.auth().currentUser.uid}/${storagePostId}/thumbnail`
      )
        .then((thumb) => {
          firebase
            .firestore()
            .collection("events")
            .add({
              id: storagePostId,
              creator: firebase.auth().currentUser.uid,
              title,
              description,
              thumb,
              date,
              musicType: "",
              location,
              user: [],
              creation: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => resolve())
            .catch(() => reject());
        })
        .catch((err) =>
          console.log("this ist the error from create rave: " + err)
        );
    });

export const getAllRaves = () => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("events")
      .orderBy("creation", "desc")
      .onSnapshot((snapshot) => {
        let events = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        dispatch({
          type: ALL_USERS_EVENTS_UPDATE,
          allUsersEvents: events,
        });
      });
  });
