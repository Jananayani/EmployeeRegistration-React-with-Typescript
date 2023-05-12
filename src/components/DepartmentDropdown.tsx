import React, { FC, useState } from 'react';

type DepartmentDropdownProps = {
  options: string[];
  selectedOption: string;
  onOptionChange: (selectedOption: string) => void;
};

const DepartmentDropdown: FC<DepartmentDropdownProps> = ({
  options,
  selectedOption,
  onOptionChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const matchingOptions = options.filter(option =>
    option.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onOptionChange(option);
  };

  return (
    <div>
      <label htmlFor="department">Department:</label>
      <input
        id="department"
        placeholder="Search for a department"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {matchingOptions.map((option) => (
          <li key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentDropdown;
