import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Neelu", label: "Neelu" },
  { value: "Aditi", label: "Aditi" },
  { value: "Shivam", label: "Shivam" },
];

const Ass = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}
    />
  );
};

export default Ass;
