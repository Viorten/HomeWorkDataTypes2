/*Максимальна зарплата
важливість: 5
Є об’єкт salaries:

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};
Створіть функцію topSalary(salaries) яка повертає ім’я найбільш високооплачуваної особи.

Якщо об’єкт salaries пустий, функція повинна повернути null.
Якщо є кілька високооплачуваних осіб, поверніть будь-якого з них.
P.S. Використовуйте Object.entries і деструктурування для перебору пар ключ/значення.*/

/* - - - Моя відповідь - - - */
let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};
function topSalary (salaries) {
  let topSalary = 0;
  let lowSalary = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (topSalary < salary) {
      topSalary = salary;
      highestSalary = name;
    };
  };
  return highestSalary;
}
console.log (topSalary(salaries))