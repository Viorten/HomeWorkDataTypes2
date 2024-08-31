/*Останній день місяця?
важливість: 5
Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця. Іноді це 30-е, 31-ше або навіть 28/29-е для лютого.

Параметри:

year – чотиризначний рік, наприклад 2012.
month – місяць, від 0 to 11.
Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).*/

/* - - - Моя відповідь - - -*/
function getLastDayOfMonth (year, month) {
    let date = new Date (year, month + 1, 0)
    return date.getDate ();
}
console.log (getLastDayOfMonth(2024,1));
console.log (getLastDayOfMonth(2023,1));
console.log (getLastDayOfMonth(2022,1))