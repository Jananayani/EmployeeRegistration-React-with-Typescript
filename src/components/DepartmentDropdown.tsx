import React, { FC } from 'react';

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
  return (
    <div>
      <label htmlFor="department">Department:</label>
      <select
        id="department"
        value={selectedOption}
        onChange={(event) => onOptionChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentDropdown;
