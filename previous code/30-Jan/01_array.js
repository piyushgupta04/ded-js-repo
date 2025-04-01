const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const DCHeros = ["Aquaman", "Batman", "Superman"];

// marvelHeros.push(DCHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3]);

// there are two ways to merge 2 arrays,
// const newArr = marvelHeros.concat(DCHeros)
// console.log(newArr);

// const indianHeros = ["Shaktiman", "Bheem", "Krish"]
// const allHeros = [...DCHeros, ...indianHeros, ...marvelHeros]
// console.log(allHeros);
// console.log("Total number of heros in allHeros are: ", allHeros.length);

let confusingArr = [1, 2, 3, 4, [51, 25, 31, [10, 11, 25]]];
let sortedArr = confusingArr.flat(Infinity);
// console.log(confusingArr);
// console.log(sortedArr);

// Array.isArray ?

console.log(Array.isArray("Piyush"));
console.log(Array.from("Piyush"));

console.log(Array.isArray({Name: "Piyush",Age: 20,DOB: "04/ 17/ 2004"}));
console.log(Array.from({Name: "Piyush",Age: 20,DOB: "04/ 17/ 2004"}));

let score1 = 245
let score2 = 4565
let score3 = 2634


console.log(Array.of(score1, score2, score3))
