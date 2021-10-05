import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import TextField from "../textField/TextField";
import "./inputArea.scss";
import CalendarInput from "../calendarInput/CalendarInput";

export default function InputArea({
  title,
  setValue,
  handleNext,
  type = "text",
  value,
  onChange = null,
}) {
  switch (type) {
    case "text":
      return (
        <div className="inputArea">
          <div className="titleContainer">
            <h1>{title}</h1>
          </div>
          <div className="inputContainer">
            <TextField setValue={setValue} type="text" value={value} />
          </div>
          <div className="submitContainer">
            <button onClick={() => handleNext()}>
              <ArrowForward className="icon" color={"inherit"} />
            </button>
          </div>
        </div>
      );
    case "date":
      return (
        <div className="inputArea">
          <div className="titleContainer">
            <h1>{title}</h1>
          </div>
          <div className="inputContainer">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                onChange={setValue}
                TextFieldComponent={CalendarInput}
                value={value}
                autoOk
                ampm={false}
                format="hh:mm dd.mm.yyyy"
                className="calendar"
              />
            </MuiPickersUtilsProvider>
          </div>

          <div className="submitContainer">
            <button onClick={() => handleNext()}>
              <ArrowForward className="icon" color={"#ffff"} />
            </button>
          </div>
        </div>
      );
    case "image":
      return (
        <div className="inputArea">
          <div className="titleContainer">
            <h1>{title}</h1>
          </div>
          <div className="inputContainer">
            <TextField
              setValue={setValue}
              type="file"
              value={value}
              onChange={onChange}
            />
          </div>
          <div className="submitContainer">
            <button onClick={() => handleNext()}>
              <ArrowForward className="icon" color={"inherit"} />
            </button>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
}
