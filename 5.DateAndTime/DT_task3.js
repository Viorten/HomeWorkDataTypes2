/*Європейський день тижня
важливість: 5
Європейські країни мають дні тижня, що починаються з понеділка (№ 1), потім вівторок (№ 2) 
та до неділі (№ 7). Напишіть функцію getLocalDay(date), що повертає “європейський” день тижня для date.

let date = new Date(2012, 0, 3);  // 3 січня 2012
alert( getLocalDay(date) );       // вівторок, слід показати 2*/

/* - - - Моя відповідь - - -*/
function getLocalDay (date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7
    };
    return day;
}
let date = new Date (2012, 0, 3);
console.log (getLocalDay(date))
