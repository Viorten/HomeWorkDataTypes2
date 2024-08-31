/*let range = {
    from: 1,
    to: 9
};
range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
    next() {
        if (this.current <= this.last) {
            return {done: false, value: this.current++};
            }   else {
                return {done: true};
            }
        }
    };
};
for (let num of range) {console.log (num)}*/

let range = {
    from: 1,
    to: 5,
[Symbol.iterator] () {
    this.current = this.from;
    return this;
}, 
next () {
    if (this.current <= this.to) {
        return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    }
};

for (let num of range) {console.log (num)};

let str = 'Срав пес, перділи гуси'
// for (let abc of str) {console.log (abc)}
let iterator = str[Symbol.iterator] ();
while (true) {
    let result = iterator.next ();
    if (result.done) break;
    console.log (result.value)
};

let arrayLike = {
    0: 'Hello',
    1: 'Jopa',
    length: 2
};
let arr = Array.from(arrayLike);
console.log (arr.pop ());