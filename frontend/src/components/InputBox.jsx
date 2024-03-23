import React from "react";

const InputBox = ({ label, placeholder, name, width }) => {
  let randomNum = Math.floor(Math.random() * 78);
  return (
    <>
      <div className="w-full">
        <label htmlFor={randomNum}>{label}</label>
        <br />
        <input
          type="text"
          name={name}
          id={randomNum}
          style={{ width: width }}
          className="input-box"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

export default InputBox;
