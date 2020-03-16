// class Person {
//     type = 'human'

//     constructor(name) {
//         this.name = name
//     }

//     greet() {
//         console.log(this.name + ' каже привіт!')
//     }
// }

// // const taras = new Person('Taras')
// // taras.greet()
// // console.log(taras)
// // console.log(taras.type)
// // console.log(taras.__proto__ === Person.prototype);

// // class Programmer extends Person{
// //     constructor(name, job) {
// //         super(name)
// //         this._job = job
// //     }

// //     get job() {
// //         return this._job.toUpperCase()
// //     }

// //     set job(job) {
// //         if (job.length < 2) {
// //             throw new Error('Validation failed')
// //         }
// //         this._job = job
// //     }

// //     greet() {
// //         super.greet()
// //         console.log('Перезаписаний');
// //     }
// // }
// // const backend = new Programmer('Taras', 'BackEnd')
// // console.log(backend);
// // backend.greet()
// // console.log(backend.job);
// // backend.job = '1'
// // console.log(backend.job);


// class Programmer extends Person{
//         constructor(name, job) {
//             super(name)
//             this._job = job
//         }
    
//         get job() {
//             return this._job.toUpperCase()
//         }
    
//         set job(job) {
//             if (job.length < 2) {
//                 console.log('Validation failed')
//             } else {
//                 this._job = job
//             }
//         }
    
//         greet() {
//             super.greet()
//             console.log('Перезаписаний');
//         }
//     }
// const backend = new Programmer('Taras', 'BackEnd')
// console.log(backend);
// backend.greet()
// console.log(backend.job);
// // backend.job = '1'
// backend.job = 'FrontEnd'
// console.log(backend.job);





// Static
// class Util {
//     average(...args) {
//         return args.reduce((acc, i) => acc += i, 0) / args.length
//     }
// }

// const util = new Util()
// console.log(util.average(1, 1, 2, 3, 5, 8, 13))


class Util {
    static average(...args) {
        return args.reduce((acc, i) => acc += i, 0) / args.length
    }
}
const res = Util.average(1, 1, 2, 3, 5, 8, 13)
console.log(res);
