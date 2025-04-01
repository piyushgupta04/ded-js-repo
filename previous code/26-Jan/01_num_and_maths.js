const number = 6565;
// ye number datatype ha but js isko convert karta ha,
// ek or tarika ha number banane ka,

const newNum = new Number(5246);
// ye number datatype ha, but ye object ha,

console.log(typeof number);
console.log(number);
console.log(typeof newNum);
console.log(newNum);

const str_newNum = newNum.toString();
console.log(typeof str_newNum);

// to fixed
const price = 299
console.log(price.toFixed(2));

const anotherNum = 1199.575646464
console.log(anotherNum.toPrecision(4));

const myCurrentBankBalance = 9999909990;
console.log(myCurrentBankBalance.toLocaleString('en-IN'));

// Maths
// Maths ka object ha, isme bohot sare methods ha,
console.log(Math.PI);
console.log(Math.round(7.544568676854543));
console.log(Math.abs(-5464));

// Math ki or properties hain, 
// min max rand floor ceil

const min = 10
const max = 20

console.log(Math.random()); // ye random number generate karta ha btw 0 to 1 except 1,
const numGen = Math.floor(Math.random() * 10); // ye random number generate karta ha btw 0 to 9,

console.log(`This will generate a random number btw 0-9 -> ${numGen}`);


console.log(Math.floor(Math.random() * (max - min + 1) + min)); // ye random number generate karta ha btw 10 to 20,
// thoda breakdown karte ha isko, 

// 1. Math.random() -> 0 to 1 except 1,
// 2. Math.random() * (max - min + 1) -> 0 to 10,
// 3. Math.random() * (max - min + 1) + min -> 10 to 20,
// 4. Math.floor(Math.random() * (max - min + 1) + min) -> 10 to 20,


