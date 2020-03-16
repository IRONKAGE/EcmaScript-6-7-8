// setTimeout(() => {
//     console.log('Після очікування');
// }, 500)


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Успішно')
//     }, 500)
// })
// promise.then(data => console.log(data))


// const delay = ms => new Promise(((resolve, reject) => {
//     setTimeout(() => resolve(`Виконано! ${ms}`), ms)
// }))

// // delay(1000).then(data => console.log(data))
// delay(1000)
//     .then(data => delay(500))
//     .then(data => console.log(data))


// const delay = ms => new Promise(((resolve, reject) => {
//     setTimeout(() => reject(`Виконано! ${ms}`), ms)
// }))

// delay(1000)
//     .then(data => delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Кінець'))


// const delay = ms => new Promise(((resolve, reject) => {
//     setTimeout(() => resolve(`Виконано! ${ms}`), ms)
// }))
// async function asyncDelay() {
//     const data = await delay(2000)
//     console.log(data)
// }
// asyncDelay()


// const delay = ms => new Promise(((resolve, reject) => {
//     setTimeout(() => reject(`Виконано! ${ms}`), ms)
// }))
// async function asyncDelay() {
//     try {
//         const data = await delay(2000)
//         console.log(data)
//     } catch (e) {
//         console.log('Помилка:', e)
//     }
// }
// asyncDelay()




const delay = ms => new Promise(((resolve, reject) => {
    setTimeout(() => resolve(`Виконано! ${ms}`), ms)
}))

Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))

Promise.race([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data)) 