import React, { useEffect, useState } from "react";
import TextField from "../../../components/general/textField/TextField";
import "./createEventScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightAlt } from "@material-ui/icons";
import InputArea from "../../../components/general/inputArea/InputArea";
import { createRave } from "../../../redux/actions";
import { Check } from "@mui/icons-material";

export default function CreateEventScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [raveDate, setRaveDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [raveThumb, setRaveThumb] = useState("");
  const [createIndex, setCreateIndex] = useState(1);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();

  const handleUploadRave = () => {
    dispatch(createRave(title, address, description, raveDate, raveThumb))
      .then(() => window.location.assign("/"))
      .catch((err) => console.log(err));
  };

  const handleNextButton = () => {
    let tmpNm = createIndex;
    tmpNm += 1;
    setCreateIndex(tmpNm);
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setRaveThumb(image);
  };

  switch (createIndex) {
    case 1:
      return (
        <InputArea
          title={"The title of the Rave"}
          handleNext={handleNextButton}
          setValue={setTitle}
          value={title}
        />
      );
    case 2:
      return (
        <InputArea
          title={"Your rave description"}
          handleNext={handleNextButton}
          setValue={setDescription}
          value={description}
        />
      );
    case 3:
      return (
        <InputArea
          title={"Where does the rave start"}
          handleNext={handleNextButton}
          setValue={setAddress}
          value={address}
        />
      );
    case 4:
      return (
        <InputArea
          title={"When does the rave start"}
          handleNext={handleNextButton}
          setValue={setRaveDate}
          value={raveDate}
          type="date"
        />
      );
    case 5:
      return (
        <InputArea
          title={"Upload a Thumbnail"}
          handleNext={handleNextButton}
          setValue={setRaveThumb}
          value={address}
          type="image"
          onChange={handleImageAsFile}
        />
      );
    case 6:
      return (
        <div className="createEventScreen">
          <div className="titleContainer">
            <h1>Upload your Rave</h1>
          </div>
          {console.log(raveThumb)}
          <div className="submitContainer">
            <button onClick={() => handleUploadRave()}>
              <Check className="icon" color={"inherit"} />
            </button>
          </div>
        </div>
      );
    default:
      break;
  }
}
