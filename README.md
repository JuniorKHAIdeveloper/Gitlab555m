# Опис системи управління персоналом

## Основні класи

### Employee

Базовий клас для опису співробітника з наступними властивостями:

- `name` (Ім'я)
- `position` (Посада)
- `salary` (Зарплата)
- `department` (Відділ)

#### Методи класу Employee:

1. `getName()` - Повертає ім'я співробітника.
2. `getPosition()` - Повертає посаду співробітника.
3. `getSalary()` - Повертає зарплату співробітника.
4. `getDepartment()` - Повертає відділ співробітника.
5. `setPosition(newPosition)` - Змінює посаду співробітника.
6. `setSalary(newSalary)` - Змінює зарплату співробітника.
7. `setDepartment(newDepartment)` - Змінює відділ співробітника.

### Різновиди співробітників

- `Manager` - Представляє менеджера.
- `Developer` - Представляє розробника.
- `HR` - Представляє HR-фахівця.

Всі ці класи наслідують `Employee`, зберігаючи загальні атрибути та методи.

## Система управління персоналом

### PersonnelManagementSystem

Основна система для управління співробітниками з наступними функціональностями:

1. **`addEmployee(employee)`** - Додає співробітника до системи.
2. **`removeEmployee(employeeName)`** - Видаляє співробітника за ім'ям.
3. **`changeEmployeePosition(employeeName, newPosition)`** - Змінює посаду співробітника.
4. **`changeEmployeeSalary(employeeName, newSalary)`** - Змінює зарплату співробітника.
5. **`listEmployees()`** - Повертає список усіх співробітників із деталями.

## Додаткові модулі

### BonusSystem

Модуль для роботи з бонусами:

- **`assignBonus(employeeName, amount)`** - Призначає бонус співробітнику.
- **`getBonus(employeeName)`** - Повертає бонус співробітника.

### TrainingSystem

Модуль для управління навчанням:

- **`assignTraining(employeeName, trainingName)`** - Призначає тренінг співробітнику.
- **`getTrainings(employeeName)`** - Повертає список тренінгів співробітника.

## Розширена система

### AdvancedPersonnelManagementSystem

Інтегрує базову систему управління персоналом з модулями:

1. **`assignBonus(employeeName, amount)`** - Додає функціональність бонусів.
2. **`getBonus(employeeName)`** - Отримує інформацію про бонуси.
3. **`assignTraining(employeeName, trainingName)`** - Додає функціональність навчання.
4. **`getTrainings(employeeName)`** - Отримує інформацію про навчання.

Конфлікт 1