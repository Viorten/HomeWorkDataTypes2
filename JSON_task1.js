/*Перетворіть об’єкт в JSON і назад
важливість: 5
Перетворіть user на JSON, після цього зробіть з нього знову об’єкт і запишіть його в іншу змінну.

let user = {
  name: "Іван Іванов",
  age: 35
};*/

/* - - - Моя відповідь - - -*/
let user = {
  name: 'Іван Іванов',
  age: 35
}
let user1 = JSON.parse(JSON.stringify (user));
console.log (user1)