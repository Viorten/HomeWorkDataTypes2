/*Скільки секунд пройшло сьогодні?
важливість: 5
Напишіть функцію getSecondsToday(), що повертає кількість секунд з початку сьогоднішнього дня.

Наприклад, якщо зараз 10:00 am, і не було зміни літнього часу, то:

getSecondsToday() == 36000 // (3600 * 10)
Функція повинна працювати в будь-який день. Тобто, вона не повинна мати жорстко-кодоване значення “сьогодні”.*/

/* - - - Моя відповідь - - -*/
function getSecondsToday () {
    let nowDate = new Date ();
    let today = new Date (nowDate.getFullYear (), nowDate.getMonth (), nowDate.getDate());
    let difference = nowDate - today;
        return Math.round (difference / 1000);
}
console.log (getSecondsToday())