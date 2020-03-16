// function sum(a, b) {
//     return a + b
// }

// function cube(a) {
//     return a ** 3
// }

// const sum = (a, b) => {
//     return a + b
// }
// console.log(sum(41, 1))

// const cube = (a) => {
//     return a ** 3
// }
// console.log(cube(2));

// const cube = a => a ** 3
// console.log(cube(2));


// setTimeout (function() {
//     console.log('Після 1 секунди')
// }, 1000)

// setTimeout (() => console.log('Після 1 секунди'), 1000)





// Context
// function log() {
//     console.log(this);
// }

// const arrowLog = () => console.log(this);

// const person = {
//     name: 'Oleh',
//     age: 26,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function() {
//         setTimeout(function() {
//             console.log(this.name + ' ' + this.age)
//         }, 500)
//     }
// }

// const person = {
//     name: 'Oleh',
//     age: 26,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function() {
//         const self = this
//         global.setTimeout(function() {
//             console.log(self.name + ' ' + self.age)
//         }, 500)
//     }
// }

// const person = {
//     name: 'Oleh',
//     age: 26,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function() {
//         global.setTimeout(() => {
//             console.log(this.name + ' ' + this.age)
//         }, 500)
//     }
// }

// console.log(global);
// person.log()
// person.arrowLog()
// person.delayLog()


// Від Вови
// Видасть 0 1 2
for (let i = 0; i < 3; i++) { 
    setTimeout (() => {
        console.log(i)
    }, 500)
}

// Видасть 3 3 3
for (var i = 0; i < 3; i++) { 
    setTimeout (() => {
        console.log(i)
    }, 500)
}