let value = 5
let negValue = -value

console.log(negValue);

// Addition
console.log(2+2); // 4

// Subtraction
console.log(2-2); // 0

// Multiplication
console.log(2*2); // 4

// Exponentiation
console.log(2**3); // 8

// Division
console.log(2/3); // 0.666...

// Modulus (Remainder)
console.log(2%3); // 2

// Some examples of operations in console (confusing)

// The first operation: 2 + 2 is evaluated first (since addition has higher precedence than string concatenation), resulting in 4.
// Then, 4 is concatenated with the string "2", resulting in the string "42".
console.log(2 + 2 + "2"); // Output: "42"

// The second operation: 2 is concatenated with the string "2", resulting in the string "22".
// Then, the string "22" is concatenated with 2, resulting in the string "222".
console.log(2 + "2" + 2); // Output: "222"

// The third operation: "2" is concatenated with 2, resulting in the string "22".
// Then, the string "22" is concatenated with 2, resulting in the string "222".
console.log("2" + 2 + 2); // Output: "222"

console.log(2 + 5 * 10 / 15 % 2); // 4 (which is wrong) // ye bohot galat tarika ha, isko aise solve karna chahiye
console.log((((2 + 5) * 10) / 15) % 2);
// aise solve karne se answer 0.6666666666666667 aayega nahi to specify kardo

// tricky conversions
console.log(+true); // Value: 1
console.log(+false); // Value: 0
// kyunki ye boolean value ha, to jab ye convert hogi to aapni actual number value degi!
console.log(+" "); // Value: 0
// enpty string ha, to iska value 0 hoga

// Prefix and Postfix Increment/Decrement

let a = 1
console.log(a++);
console.log(a);

