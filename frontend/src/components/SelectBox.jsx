import React from "react";

const SelectBox = ({ label, placeholder, name, width, options }) => {
  let randomNum = Math.floor(Math.random() * 78);
  let loadOptions = () => {
    options.map((option) => {
      return option;
    });
  };
  return (
    <>
      <div className="w-full">
        <label htmlFor={randomNum}>{label}</label>
        <br />
        <select
          type="text"
          name={name}
          id={randomNum}
          required
          style={{ width: width }}
          className="input-box"
          placeholder={placeholder}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectBox;
