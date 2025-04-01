// String interpolation in JavaScript allows you to embed expressions within string literals, using template literals. Template literals are enclosed by backticks (`) instead of single or double quotes. Expressions are embedded using `${expression}`.
// This approach makes it easier to create strings that include variables and expressions.


const name = "Piyush";
const age = 20;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message);

const altName = new String("Piyush");
// console.log(typeof altName);
// console.log(typeof name);
// console.log(altName);
// console.log(name);


// console.log(altName.length);
// console.log(altName.indexOf("h"));
// console.log(altName.indexOf("P"));
// console.log(altName.charAt(3));

console.log(`The length of altName is ${altName.length} and the index of character 'h' is ${altName.indexOf("h")}`);


const name1 = altName.substring(0, 6);
const name2 = altName.slice(-1, 6);

console.log(name1, name2);


const newNameWithWhitespace = "          Piyush               ";
console.log(newNameWithWhitespace);
console.log(newNameWithWhitespace.trim());

// ! Iska function banan ha bhai!!!!!!!!!!!

const url = "https://youtu.be/lxRwEPvL-mQ?si=__AvE9Aqm18b0ocw";
const urlReplace = url.replace("?","trim.sh");
console.log(urlReplace);
const urlIndex_sh = urlReplace.indexOf("trim.sh");

const trimmedUrl = urlReplace.slice(0, urlIndex_sh);
console.log(trimmedUrl);

// url.includes => ye true ya false return karta ha | agar isse puchoe ki koi particular isme ha ya nahi to ye check karke value true ya false e return karti ha !!!

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = sentence.split(" ");

console.log(word.length);
