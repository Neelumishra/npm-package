import React from "react";

function Filter({ value, handleRadioChange }) {
  console.log(value);
  return (
    <div>
      <label>
        <input
          onChange={handleRadioChange}
          type="radio"
          name="filter"
          value={value}
        />{" "}
        {value}
      </label>
    </div>
  );
}

export default Filter;
