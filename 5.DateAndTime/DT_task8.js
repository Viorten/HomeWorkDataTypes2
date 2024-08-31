/*Формат відносної дати
важливість: 4
Напишіть функцію formatDate(date), яка повинна форматувати date наступним чином:

Якщо з date пройшла менше, ніж 1 секунда, то "прямо зараз".
Інакше, якщо з date пройшло менше 1 хвилини, то "n сек. назад".
Інакше, якщо менше години, то "m хв. назад".
В іншому випадку повна дата у форматі "DD.MM.YY HH:mm". Тобто: "день.місяць.рік години:хвилини", 
все в 2-значному форматі, наприклад, 31.12.16 10:00.
Наприклад:

alert( formatDate(new Date(new Date - 1)) ); // "прямо зараз"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"

// вчорашня дата, як 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );*/

/* - - - Моя відповідь - - -*/
function formatDate (date) {
    let difference = new Date () - date;
    if (difference < 1000) {
        return 'прямо зараз';
    };

    let seconds = Math.floor (difference / 1000);
    if (seconds < 60) {
        return seconds + " секунд назад";
    };

    let minutes = Math.floor (difference / 60000);
    if (minutes < 60) {
        return minutes + ' хвилин назад';
    };

    let d = date;
    d = ['0' + d.getDate(), 
        '0' + (d.getMonth() + 1), 
        '' + d.getFullYear(), 
        '0' + d.getHours(), 
        '0' + d.getMinutes()
    ].map(element => element.slice (-2));
        return d.slice (0, 3).join ('.') + ' ' + d.slice (3).join(':');
} 

console.log( formatDate(new Date(new Date - 1)) ); 
    console.log( formatDate(new Date(new Date - 30 * 1000)) ); 
        console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
            console.log( formatDate(new Date(new Date - 86400 * 1000)) )