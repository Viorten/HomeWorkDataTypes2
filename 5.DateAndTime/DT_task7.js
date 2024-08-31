/*Скільки секунд до завтра?
важливість: 5
Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.

Наприклад, якщо зараз є 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функція повинна працювати в будь-який день, “сьогодні” не є жорстко закодованим.*/

/* - - - Моя відповідь - - -*/
function getSecondsToTomorrow () {
    let nowDate = new Date ();
    let tomorrow = new Date (nowDate.getFullYear (), nowDate.getMonth(), nowDate.getDate()+1)
    let difference = tomorrow - nowDate;
        return Math.round (difference / 1000);
}
console.log (getSecondsToTomorrow())