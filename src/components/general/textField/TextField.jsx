import React, { useEffect, useState } from "react";
import "./textField.scss";

export default function TextField({
  type = "text",
  setValue = null,
  value,
  onChange = null,
}) {
  let tmpValue = value;
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      type={type}
      className="textField"
      value={type === "text" ? value : ""}
      onChange={onChange === null ? handleChange : onChange}
      accept={type === "file" && "image/png, image/gif, image/jpeg"}
    />
  );
}
