// '', "", ``
// const template = `<h1>Титулка</h1>`
// console.log(template);

// const title = 'Титулка'
// const template = `<h1 id='title' style="color: red">${title}</h1>`
// console.log(template);

// const title = 'Титулка'
// const isVisible = () => Math.random() > 0.5
// const template = `
//     ${isVisible() ? `<p>Видно</p>` : ''}
//     <h1 id='title' style="color: red">${title}</h1>
// `
// console.log(template);





// Methods
const str = 'Привіт'

console.log(str.startsWith('При'));
console.log(str.startsWith('Go'));

console.log(str.endsWith('іт'));
console.log(str.endsWith('re'));

console.log(str.includes('ри'));
console.log(str.includes('it'));

console.log(str.repeat(3));

console.log(str.trim(1, 1));
console.log(str.trimEnd());
console.log(str.trimStart());

console.log(str.padStart(14, 1234));
console.log(str.padEnd(14, 1234));
