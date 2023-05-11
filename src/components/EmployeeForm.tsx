import React, { useState } from 'react';
import DepartmentDropdown from './DepartmentDropdown';
import EditEmployeeForm, { Employee } from './EditEmployeeForm';
import './EmployeeForm.style.css';

interface Props {
  onAdd: (employee: Employee) => void;
}

const EmployeeForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [nextId, setNextId] = useState(1);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const departments = ['Select Department','Development','Quality Assurance','Project Management','Technical Support', 'HR', 'Marketing'];

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

    const employee: Employee = {
      id: nextId,
      name,
      email,
      department,
    };
    onAdd(employee);
    setEmployees([...employees, employee]);
    setNextId(nextId + 1);

    setName('');
    setEmail('');
    setDepartment('');
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const handleSaveEdit = (editedEmployee: Employee) => {
    setEmployees(employees.map(employee => employee.id === editedEmployee.id ? editedEmployee : employee));
    setEditingEmployee(null);
  };

  return (
    <div className="employee-form">
      {editingEmployee ? (
        <EditEmployeeForm
          employee={editingEmployee}
          onCancel={handleCancelEdit}
          onEdit={handleSaveEdit}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='full-form'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <DepartmentDropdown
            options={departments}
            selectedOption={department}
            onOptionChange={handleDepartmentChange}
          />
          <button type="submit">Add Employee</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default EmployeeForm;
