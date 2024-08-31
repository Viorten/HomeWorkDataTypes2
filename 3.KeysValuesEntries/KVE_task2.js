/*Порахуйте властивості
важливість: 5
Напишіть функцію count(obj), що повертає кількість властивостей об’єкта:

let user = {
  name: 'Іван',
  age: 30
};

alert( count(user) ); // 2
Намагайтеся зробити код якомога коротшим.

P.S. Ігноруйте символьні властивості, враховуйте лише “звичайні”.*/

/* - - - Моя відповідь - - - */

function count (obj) {
    return Object.keys (obj).length;
}
let user = {
    name: 'Іван',
    age: 30
}
console.log (count (user))