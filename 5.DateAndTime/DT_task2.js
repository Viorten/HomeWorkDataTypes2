/*Показати день тижня
важливість: 5
Напишіть функцію getWeekDay(date), щоб показати день тижня у короткому форматі: ‘ПН’, ‘ВТ’, ‘СР’, ‘ЧТ’, ‘ПТ’, ‘СБ’, ‘НД’.

Наприклад:

let date = new Date(2012, 0, 3);  // 3 січня 2012
alert( getWeekDay(date) );        // повинно виводити "ВТ"*/

/* - - - Моя відповідь - - -*/
function getWeekDay (date) {
    let day = ['НД', 'ПН', 'ВТ','СР', 'ЧТ', 'ПТ', 'СБ'];
    return day[date.getDay()]
}
let date = new Date (2012, 0, 3);
console.log (getWeekDay(date))