SELECT first_name, last_name, title, salary, department_name FROM employee
INNER JOIN department ON employee.department_id
WHERE employee.department_id = department.id