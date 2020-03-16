const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} в об'єкті не існує!`
    },

    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Довжина повинна бути більше двох символів. Наразі їх ' + value.length)
        }
    }
}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form, validator)

// console.log(formProxy);
// console.log(formProxy.login);
// console.log(formProxy['login']);
// console.log(formProxy.password);
// console.log(formProxy.country);
// console.log(formProxy['username']);

// formProxy.password = '123'
// console.log(formProxy.password);

// formProxy.password = '12'
// console.log(formProxy.password);


function log(message) {
    console.log('[Log]: ', message);
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log('Кількість аргументів не співпадає');
            
        }
    }
})

proxy('Якесь повідомлення')
proxy('Custom message')
proxy()
proxy('Повідомлення', 2)