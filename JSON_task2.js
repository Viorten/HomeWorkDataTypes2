/*Виключити зворотні посилання
важливість: 5
У простих випадках циклічних посиланнь ми можемо виключити від серіалізації 
властивість, через яку воно виникло, за її ім’ям.

Але іноді ми не можемо просто використовувати назву, оскільки вона може 
використовуватися як і у циклічних посиланнях, так і в звичайних, потрібних нам, властивостях. 
Таким чином, ми можемо перевірити властивість за її значенням.

Напишіть функцію replacer, щоб серіалізувати все, але видалити властивості, які посилаються на meetup:
let room = {
  number: 23
};

let meetup = {
  title: "Конференція",
  occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
  place: room
};

// циклічне посилання
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  / ваш код /
}));

/* результат повинен бути:
{
  "title":"Конференція",
  "occupiedBy":[{"name":"Іван"},{"name":"Аліса"}],
  "place":{"number":23}
}
/*/

/* - - - Моя відповідь - - -*/
let room = {
  number: 23
};

let meetup = {
  title: "Конференція",
  occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value === meetup) ? undefined : value;
}));