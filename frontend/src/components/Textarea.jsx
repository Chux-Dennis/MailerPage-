import React from "react";

const Textarea = ({ placeholder, label, width }) => {
  let randomNum = Math.floor(Math.random() * 78);

  return (
    <div className="mt-6">
      <label htmlFor={randomNum}>{label}</label>
      <textarea
        name="message"
        placeholder={placeholder}
        id={randomNum}
        style={{ width: width, resize: "none" }}
        cols="20"
        className="input-box"
        rows="5"
      ></textarea>
    </div>
  );
};

export default Textarea;
