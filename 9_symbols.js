const symbol = Symbol('demo')
const other = Symbol('demo')
console.log(symbol);
console.log(other);

console.log(symbol == other);
console.log(symbol === other);


const obj = {
    name: 'Yuliia',
    demo: 'DEMO',
    [symbol]: 'meta'
}
console.log(obj)
console.log(obj[symbol]);
console.log(obj[other]);


for (let key in obj) {
    console.log(key)
}

console.log(obj.demo)
console.log(obj[symbol]);