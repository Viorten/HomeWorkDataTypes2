/*Відфільтруйте анаграми
важливість: 4
Анаграми – це слова, у яких ті ж букви в тій же кількості, але вони розташовуються в іншому порядку.

Наприклад:

nap - pan
ear - are - era
cheaters - hectares - teachers

Напишіть функцію aclean(arr), яка повертає масив без анаграм.
Наприклад:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
З кожної групи анаграм має залишитися тільки одне слово, не має значення яке.*/

/* - - - Моя відповідь - - -*/
function aclean (arr) {
    let map = new Map ();
    for (let word of arr) {
        let sorting = word.toLowerCase().split('').sort().join ('');
        map.set(sorting, word);
    }
    return Array.from (map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log (aclean(arr))