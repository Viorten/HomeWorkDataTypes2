/*Ми хотіли б отримати масив ключів map.keys() в змінну і далі працювати з ними, наприклад, застосувати метод .push.

Але так не спрацює:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Помилка: keys.push -- це не функція
keys.push("more");
Чому? Що потрібно виправити в коді, щоб keys.push працював?*/

/* - - - Моя відповідь - - -*/
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys()); //let keys = map.keys () не буде працювати через те, 
//що він повертає об'єкт ітератор, а не масив. Тому варто його конвертувати за допомоги Array.from ()
keys.push("more");
console.log(keys);
