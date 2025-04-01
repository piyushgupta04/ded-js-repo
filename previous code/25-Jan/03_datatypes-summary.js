// datatypes
// 1. Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
// these are call by value.

// 2. Non-Primitive: Array, Object, Function.
// these are call by reference.

// ! Javascript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type of the variable is determined at the time of assignment.

let outsideTemp = null

console.log("Outside teperature is: " + outsideTemp);
console.log(typeof outsideTemp);

// let userEmail;
let userEmail = undefined;
// same as above

let myNum =  Symbol('12112');
let myNum2 =  Symbol('12112');

console.log(myNum === myNum2);
console.log(myNum, myNum2);

const bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum);
console.log(typeof bigNum);

// 3. Arrays
let heros = ["Ironman", "Captain America", "Thor", "Hulk"];
let villens = ["Thanos", "Loki", "Ultron", "Red Skull"];
console.log(heros);

let myFun = function () {
    console.log("I am a function");
}

console.log(typeof myFun);

console.table(heros);
console.table(villens);

// 4. Objects
let myObj = {
    name: "Tony Stark",
    age: 45,
    address: "New York",
}
console.table(myObj);