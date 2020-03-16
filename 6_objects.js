// const person = {
//     age: 25,
//     name: 'Yuliya',
//     'country-live': 'Ukraine',
//     toString: function() {
//         return Object
//             .keys(this)
//             .map(key => this[key])
//             .join(' ')
//     }
// }
// console.log(person);
// console.log(person.toString());


// const person = {
//     age: 25,
//     name: 'Yuliya',
//     'country-live': 'Ukraine',
//     toString: function() {
//         return Object
//             .keys(this)
//             .filter(key => key !== 'toString')
//             .map(key => this[key])
//             .join(' ')
//     }
// }
// console.log(person);
// console.log(person.toString());


// const person = {
//     age: 25,
//     name: 'Yuliya',
//     'country-live': 'Ukraine',
//     print: () => 'Person',
//     toString() {
//         return Object
//             .keys(this)
//             .filter(key => key !== 'toString')
//             .map(key => this[key])
//             .join(' ')
//     }
// }
// console.log(person);
// console.log(person.toString());
// console.log(person.print);

// const cityField = 'city'
// const job = 'BackEnd'
// const person = {
//     age: 25,
//     name: 'Yuliya',
//     [cityField + Date.now()]: 'Kramatorsk',
//     job: job, //якщо var == key то можна писати просто: key
//     'country-live': 'Ukraine',
//     print: () => 'Person',
//     toString() {
//         return Object
//             .keys(this)
//             .filter(key => key !== 'toString')
//             .map(key => this[key])
//             .join(' ')
//     }
// }
// console.log(person);
// console.log(person.toString());
// console.log(person.print());






// Methods
// const first = { a: 1 }
// const second = { b: 2 }

// console.log(Object.is(20, 10));
// console.log(Object.is(20, 20));

// console.log(Object.assign({}, first, second));
// console.log((first));


// const first = { a: 1 }
// const second = { b: 2 }

// console.log(Object.assign({}, first, second, {
//     c: 2,
//     d: 3
// }));
// console.log((first));


const first = { a: 1 }
const second = { b: 2 }
const obj = Object.assign({}, first, {
    c: 2,
    d: 3
});
console.log(obj);
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));