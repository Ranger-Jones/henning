import firebase from "firebase";
require("firebase/firebase-storage");

export const saveMediaToStorage = (media, path) =>
  new Promise((resolve, reject) => {
    firebase
      .storage()
      .ref(path)
      .put(media)
      .then(() => {
        firebase
          .storage()
          .ref(path)
          .getDownloadURL()
          .then((url) => resolve(url))
          .catch((err) => console.log("ERROR GETTING URL: " + err));
      })
      .catch((err) => console.log("ERROR UPLOADING IMAGE: " + err));
  });

  
