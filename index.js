// Клас "Співробітник"
class Employee {
  constructor(name, position, salary, department) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.department = department;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getSalary() {
    return this.salary;
  }

  getDepartment() {
    return this.department;
  }

  setPosition(newPosition) {
    this.position = newPosition;
  }

  setSalary(newSalary) {
    this.salary = newSalary;
  }

  setDepartment(newDepartment) {
    this.department = newDepartment;
  }
}

// Класи типів співробітників
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, 'Manager', salary, department);
  }
}

class Developer extends Employee {
  constructor(name, salary, department) {
    super(name, 'Developer', salary, department);
  }
}

class HR extends Employee {
  constructor(name, salary, department) {
    super(name, 'HR Specialist', salary, department);
  }
}

// Клас "Система управління персоналом"
class PersonnelManagementSystem {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employeeName) {
    this.employees = this.employees.filter((e) => e.getName() !== employeeName);
  }

  changeEmployeePosition(employeeName, newPosition) {
    const employee = this.employees.find((e) => e.getName() === employeeName);
    if (employee) {
      employee.setPosition(newPosition);
    }
  }

  changeEmployeeSalary(employeeName, newSalary) {
    const employee = this.employees.find((e) => e.getName() === employeeName);
    if (employee) {
      employee.setSalary(newSalary);
    }
  }

  listEmployees() {
    return this.employees.map((e) => ({
      name: e.getName(),
      position: e.getPosition(),
      salary: e.getSalary(),
      department: e.getDepartment(),
    }));
  }
}

// Клас "Бонусна система"
class BonusSystem {
  constructor() {
    this.bonuses = new Map();
  }

  assignBonus(employeeName, amount) {
    this.bonuses.set(employeeName, amount);
  }

  getBonus(employeeName) {
    return this.bonuses.get(employeeName) || 0;
  }
}

// Клас "Система навчання"
class TrainingSystem {
  constructor() {
    this.trainings = new Map();
  }

  assignTraining(employeeName, trainingName) {
    if (!this.trainings.has(employeeName)) {
      this.trainings.set(employeeName, []);
    }
    this.trainings.get(employeeName).push(trainingName);
  }

  getTrainings(employeeName) {
    return this.trainings.get(employeeName) || [];
  }
}

// Інтеграція всіх систем
class AdvancedPersonnelManagementSystem extends PersonnelManagementSystem {
  constructor() {
    super();
    this.bonusSystem = new BonusSystem();
    this.trainingSystem = new TrainingSystem();
  }

  assignBonus(employeeName, amount) {
    this.bonusSystem.assignBonus(employeeName, amount);
  }

  getBonus(employeeName) {
    return this.bonusSystem.getBonus(employeeName);
  }

  assignTraining(employeeName, trainingName) {
    this.trainingSystem.assignTraining(employeeName, trainingName);
  }

  getTrainings(employeeName) {
    return this.trainingSystem.getTrainings(employeeName);
  }
}

// Приклад використання
const personnelSystem = new AdvancedPersonnelManagementSystem();

const john = new Manager('John Doe', 5000, 'Sales');
const jane = new Developer('Jane Smith', 4000, 'IT');
const mike = new HR('Mike Johnson', 3000, 'Human Resources');

personnelSystem.addEmployee(john);
personnelSystem.addEmployee(jane);
personnelSystem.addEmployee(mike);

personnelSystem.assignBonus('Jane Smith', 500);
personnelSystem.assignTraining('Mike Johnson', 'Conflict Resolution');

console.log('Список співробітників:', personnelSystem.listEmployees());
console.log('Бонус Джейн Сміт:', personnelSystem.getBonus('Jane Smith'));
console.log('Тренінги Майка Джонсона:', personnelSystem.getTrainings('Mike Johnson'));

personnelSystem.changeEmployeePosition('John Doe', 'Senior Manager');
console.log('Оновлена посада Джона Доу:', personnelSystem.listEmployees());
