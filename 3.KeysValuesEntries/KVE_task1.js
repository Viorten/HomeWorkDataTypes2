/*Підсумуйте властивості
важливість: 5
Є об’єкт salaries з довільною кількістю властивостей, що містять заробітні плати.

Напишіть функцію sumSalaries(salaries), що повертає суму всіх зарплат за допомогою Object.values та циклуfor..of.

Якщо об’єкт salaries порожній, тоді результат повинен бути 0.

Наприклад:

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

alert( sumSalaries(salaries) ); // 650*/

/* - - - Моя відповідь - - - */
/*function sumSalaries(salaries) {
    let sum = 0;
    for (salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}*/ //1-й варіант з циклом

let sumSalaries = salaries => Object.values(salaries).reduce((a,b) => a + b, 0) //2-й варіант, без циклу
let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
}
console.log (sumSalaries(salaries))
console.log (Object.entries({}))