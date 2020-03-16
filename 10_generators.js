// const array = [1, 2, 3 ,4]
// const str = 'Привіт'
// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);


// const iter = array[Symbol.iterator]()
// console.log(iter);

// const array = [10, 20, 30 ,40]
// const str = 'Привіт'

// const iter = array[Symbol.iterator]()
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// const array = [10, 20, 30 ,40]
// const str = 'Привіт'

// const iter = str[Symbol.iterator]()
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// const array = [10, 20, 30 ,40]
// const str = 'Привіт'

// for (let item of str) {
//     console.log(item);
// }


// const country = {
//     values: ['ua', 'kz', 'ru', 'by', 'md'],
//     [Symbol.iterator]() {
//         let i = 0
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i +=+ 1 //або i++
//                 return {
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//     }
// }

// for (let item of country) {
//     console.log(item)
// }





// Generators
// function *gen(num = 4) {
//     for (let i = 0; i < num; i++) {
//         yield i
//     }
// }

// const iter = gen (3)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// for (let i of gen(4)) {
//     console.log(i);
// }


function *gen(num = 4) {
    for (let i = 0; i < num; i++) {
        try {
            yield i
        } catch (e) {
            console.log('Помилка:', e);
        }
    }
}

const iter = gen (3)
console.log(iter.next())
console.log(iter.throw('Якась там помилка'))
console.log(iter.next())
console.log(iter.next())