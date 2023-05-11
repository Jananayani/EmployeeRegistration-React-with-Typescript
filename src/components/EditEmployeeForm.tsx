import React, { useState } from 'react';
import DepartmentDropdown from './DepartmentDropdown';

export type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
};

type EditEmployeeFormProps = {
  employee: Employee;
  onEdit: (editedEmployee: Employee) => void;
  onCancel: () => void;
};

const EditEmployeeForm = ({ employee, onEdit, onCancel }: EditEmployeeFormProps) => {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [department, setDepartment] = useState(employee.department);

  const departments = ['HR', 'Engineering', 'Marketing'];

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDepartmentChange = (selectedOption: string) => {
    setDepartment(selectedOption);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const editedEmployee: Employee = {
      ...employee,
      name,
      email,
      department,
    };

    onEdit(editedEmployee);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <DepartmentDropdown
          options={departments}
          selectedOption={department}
          onOptionChange={handleDepartmentChange}
        />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
};

export default EditEmployeeForm;
