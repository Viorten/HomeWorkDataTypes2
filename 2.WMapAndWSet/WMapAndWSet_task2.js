/*Зберігати дати читання
важливість: 5
Є масив повідомлень, як у попередньому завдані. Ситуація схожа.

let messages = [
  {text: "Привіт", from: "Іван"},
  {text: "Як справи?", from: "Іван"},
  {text: "До зустрічі", from: "Аліса"}
];
Зараз питання наступне: яку структуру даних ви б запропонували для того, 
щоб зберегти інформацію: “Коли повідомлення було прочитано?”.

У попередньому завданні нам потрібно лише зберігати інформацію “так/ні”. 
Тепер нам потрібно зберігати дату, і це повинно залишитися в пам’яті лише доки повідомлення не буде видалено.

P.S. Дати можуть зберігатися як об’єкти вбудованого класу Data, що ми розглянемо пізніше.*/

/* - - - Моя відповідь - - -*/
let messages = [
    {text: "Привіт", from: "Іван"},
    {text: "Як справи?", from: "Іван"},
    {text: "До зустрічі", from: "Аліса"}
];
let readed = new WeakMap();
readed.set(messages[0], new Date (2024,7,29));
console.log (readed.get (messages[0]));