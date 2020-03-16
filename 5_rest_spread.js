// Rest
// function average(arr) {
//     return arr.reduce((acc, i) => acc += i, 0) / arr.length
// }
// console.log(average([10, 20, 30, 40]));

// function average(arr) {
//     return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length
// }
// console.log(average(10, 20, 30, 40, 50));

// function average(...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
// }
// console.log(average(10, 20, 30, 40, 50));

// function average(a, b, ...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
// }
// console.log(average(10, 20, 30, 40, 50));





// Spread
// const array = [1, 2, 3 ,5, 8, 13]
// console.log(array);
// console.log(...array);
// console.log(Math.max(array));
// console.log(Math.max(...array));
// console.log(Math.min(...array));
// console.log(Math.max.apply(null, array));

// const fib = [1, ...array]
// console.log(fib);





// Destructuring
// const array = [1, 2, 3 ,5, 8, 13]

// const a = array[0]
// const b = array[1]
// console.log(a, b)

// const [a, b] = array
// console.log(a, b)

// const [a, b, ...c] = array
// console.log(a, b, c)


// const array = [1, undefined, 3 ,5, 8, 13]
// const [a, b = 42, ...c] = array
// console.log(a, b, c)


// const array = [1, undefined, 3 ,5, 8, 13]
// const [a, , c] = array
// console.log(a, c);





// Object
const address = {
    country: 'Ukraine',
    city: 'Lviv',
    street: 'Franka',
    concat: function() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}
// console.log(address.concat())

// const {city, country, street, concat} = address
// console.log(city)
// console.log(concat())
// console.log(concat.call(address))

// const {city, country, street = 'Shevchenka', concat: addressConcat} = address
// console.log(addressConcat.call(address))
// console.log(street)

// const {city, ...rest} = address
// console.log(city)
// console.log(rest);

// const newAddress = {...address}
// console.log(newAddress)

const newAddress = {...address, street: 'Schevchenka', zip: 79000}
console.log(newAddress)
