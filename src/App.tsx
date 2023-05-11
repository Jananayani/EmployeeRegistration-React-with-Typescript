import React, { useState } from 'react';
// import  { Employee } from './components/EditEmployeeForm';
import  EmployeeForm  from './components/EmployeeForm';

import EditEmployeeForm,  { Employee } from './components/EditEmployeeForm';


const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const addEmployee = (employee: Employee) => {
    setEmployees([...employees, employee]);
  };

  // const deleteEmployee = (id: number) => {
  //   setEmployees(employees.filter((employee) => employee.id !== id));
  //   setEditingEmployee(null);
  // };

  const editEmployee = (employee: Employee) => {
    setEmployees(
      employees.map((e) => (e.id === employee.id ? employee : e))
    );
    setEditingEmployee(null);
  };

  const startEditingEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  const cancelEditingEmployee = () => {
    setEditingEmployee(null);
  };

  return (
    <div>
      {editingEmployee ? (
        <EditEmployeeForm
          employee={editingEmployee}
          onEdit={editEmployee}
          onCancel={cancelEditingEmployee}
        />
      ) : (
        <EmployeeForm onAdd={addEmployee} />
      )}
      {/* <table>
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
                <button onClick={() => startEditingEmployee(employee)}>
                  Edit
                </button> */}
                {/* <button onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button> */}
              {/* </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default App;
