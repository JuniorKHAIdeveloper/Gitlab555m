const {
    Employee,
    Manager,
    Developer,
    HR,
    PersonnelManagementSystem,
    BonusSystem,
    TrainingSystem,
    AdvancedPersonnelManagementSystem,
  } = require('./index.js');

  describe('Employee Class', () => {
    test('should correctly create an Employee instance', () => {
      const employee = new Employee('Alice', 'Developer', 4000, 'IT');
      expect(employee.getName()).toBe('Alice');
      expect(employee.getPosition()).toBe('Developer');
      expect(employee.getSalary()).toBe(4000);
      expect(employee.getDepartment()).toBe('IT');
    });

    test('should allow changing position, salary, and department', () => {
      const employee = new Employee('Bob', 'HR', 3000, 'Human Resources');
      employee.setPosition('Senior HR');
      employee.setSalary(3500);
      employee.setDepartment('Operations');

      expect(employee.getPosition()).toBe('Senior HR');
      expect(employee.getSalary()).toBe(3500);
      expect(employee.getDepartment()).toBe('Operations');
    });
  });

  describe('PersonnelManagementSystem Class', () => {
    test('should add and list employees', () => {
      const system = new PersonnelManagementSystem();
      const employee = new Developer('Charlie', 5000, 'IT');

      system.addEmployee(employee);
      const employees = system.listEmployees();

      expect(employees).toEqual([
        {
          name: 'Charlie',
          position: 'Developer',
          salary: 5000,
          department: 'IT',
        },
      ]);
    });

    test('should remove an employee by name', () => {
      const system = new PersonnelManagementSystem();
      const employee = new Manager('Diana', 6000, 'Sales');
      system.addEmployee(employee);

      system.removeEmployee('Diana');
      expect(system.listEmployees()).toEqual([]);
    });

    test('should change employee position and salary', () => {
      const system = new PersonnelManagementSystem();
      const employee = new HR('Eve', 4000, 'HR');
      system.addEmployee(employee);

      system.changeEmployeePosition('Eve', 'Senior HR');
      system.changeEmployeeSalary('Eve', 4500);

      const employees = system.listEmployees();
      expect(employees[0].position).toBe('Senior HR');
      expect(employees[0].salary).toBe(4500);
    });
  });

  describe('BonusSystem Class', () => {
    test('should assign and retrieve bonuses', () => {
      const bonusSystem = new BonusSystem();

      bonusSystem.assignBonus('Frank', 1000);
      expect(bonusSystem.getBonus('Frank')).toBe(1000);

      expect(bonusSystem.getBonus('Unknown')).toBe(0); // No bonus assigned
    });
  });

  describe('TrainingSystem Class', () => {
    test('should assign and retrieve trainings', () => {
      const trainingSystem = new TrainingSystem();

      trainingSystem.assignTraining('Grace', 'Leadership');
      trainingSystem.assignTraining('Grace', 'Team Management');

      expect(trainingSystem.getTrainings('Grace')).toEqual([
        'Leadership',
        'Team Management',
      ]);

      expect(trainingSystem.getTrainings('Unknown')).toEqual([]); // No trainings assigned
    });
  });

  describe('AdvancedPersonnelManagementSystem Class', () => {
    test('should integrate employee management, bonus, and training systems', () => {
      const system = new AdvancedPersonnelManagementSystem();

      const employee = new Developer('Helen', 7000, 'Engineering');
      system.addEmployee(employee);

      system.assignBonus('Helen', 2000);
      system.assignTraining('Helen', 'Agile Development');

      const employees = system.listEmployees();
      expect(employees).toHaveLength(1);
      expect(system.getBonus('Helen')).toBe(2000);
      expect(system.getTrainings('Helen')).toEqual(['Agile Development']);
    });

    test('should handle updates and integration properly', () => {
      const system = new AdvancedPersonnelManagementSystem();
      const employee = new Manager('Ivy', 8000, 'Marketing');
      system.addEmployee(employee);

      system.changeEmployeePosition('Ivy', 'Senior Marketing Manager');
      system.assignBonus('Ivy', 1500);

      const employees = system.listEmployees();
      expect(employees[0].position).toBe('Senior Marketing Manager');
      expect(system.getBonus('Ivy')).toBe(1500);
    });
  });
