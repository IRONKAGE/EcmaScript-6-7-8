class Student {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Привіт, мене звати ${this.name}`)
    }
}

class ProtoStudent {
    university = 'Політех'
}

// const student = Reflect.construct(Student, ['Олег'])
// console.log(student);

// const student = Reflect.construct(Student, ['Олег'], ProtoStudent)
// console.log(student);
// console.log(student.__proto__ === Student.prototype);
// console.log(student.__proto__ === ProtoStudent.prototype);

const student = Reflect.construct(Student, ['Олег'])
Reflect.apply(student.greet, {name: 'Тестер'}, [])
console.log(Reflect.ownKeys(student));

// student.age = 25
// console.log(student);

Reflect.preventExtensions(student)
student.age = 25
console.log(Reflect.isExtensible(student));

console.log(student);
