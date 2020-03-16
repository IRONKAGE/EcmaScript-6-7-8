// function compute (a, b) {
//     return a + b
// }
// console.log(compute())

// function compute (a, b) {
//     return a + b
// }
// console.log(compute(10, 20))

// function compute (a, b = 20) {
//     return a + b
// }
// console.log(compute(10))

// function compute (a, b = 20) {
//     return a + b
// }
// console.log(compute(10, 40))

// function compute (a = 5, b = 20) {
//     return a + b
// }
// console.log(compute(10, 40))

// function compute (a = 5, b) {
//     return a + b
// }
// console.log(compute(20))

// function compute (a = 5, b = 20) {
//     return a + b
// }
// console.log(compute(20))


const defaultB = 30
const getDefault = c => c * 2
function compute (a = defaultB, b = getDefault(10 * a)) {
    return a + b
}
console.log(compute())