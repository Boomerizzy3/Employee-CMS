const inquirer = require('inquirer');



const menu = [
    {
      type: 'list',
      name: 'menuOption',
      message: 'What would you like to do?',
      choices: [
        'Add new Employee',
        'Add new Department',
        'Display current Employees',
        'Display current Departments',
        'Quit'
      ]
    }
  ];
  
  function main() {
    inquirer
      .prompt(menu)
      .then(answers => {
        switch (answers.menuOption) {
          case 'Add new Employee':
            inquirer
            .prompt([
                {
                  type: 'input',
                  message: 'Enter first name',
                  name: 'first_name',
                },
                {
                  type: 'input',
                  message: 'Enter last name',
                  name: 'Last_name',
                },
                {
                  type: 'input',
                  message: 'Enter job title',
                  name: 'title',
                },
                {
                  type: 'input',
                  message: 'Enter salary',
                  name: 'salary'
                },
                {
                  type: 'input',
                  message: 'Enter department id',
                  name: 'department_id'
                },
              ])
              .then((response) =>
              main()
                );
            break;
          case 'Add new Department':
            inquirer
            .prompt([
                {
                  type: 'input',
                  message: 'Enter department name',
                  name: 'department_name',
                },
              ])
              .then((response) =>
              main()
                );
            break;
          case 'Display current Employees':
            break;
          case 'Display current Departments':
            // Code for option 4
            break;
          case 'Quit':
            console.log('Exiting program.');
            process.exit();
            break;
          default:
            console.log('Invalid option selected.');
            break;
        }
      });
  }
  
  main();