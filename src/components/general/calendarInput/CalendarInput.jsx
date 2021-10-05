import React from "react";
import "./calendarInput.scss";
import { TextFieldProps } from "@material-ui/core";

export default function CalendarInput(props, { type = "text", value = "" }) {
  return (
    <input
      type={type}
      className="textField"
      onChange={props.onChange}
      value={props.value}
      onClick={props.onClick}
    />
  );
}
