// create a new array!

// const arr = [53, 45, 654, 564, 64]
// console.log(typeof(arr));
// console.log(arr);

// some other ways to declare Arrays
const arr1 = new Array(1, 2, 68674, 584, 879)


// Operations-
// push
// arr.push(1000);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(9);
// unshift array ke starting me value add kar deta ha,
// same aise hi ha, shift(), ye first value remove kar deta ha array se

// console.log(arr);


// -------------------------- * --------------------------

const newArr = [50, 53, 54, 54, 89, 7889]
console.log(newArr)
console.log("join() > " + newArr.join())
console.log(newArr.includes(89))
console.log(newArr.includes(5))
console.log(newArr.indexOf(5))
console.log(newArr.indexOf(7889))

// -------------------------- * --------------------------

// Slice & Splice

let arrOne = [10, 15, 35, 20, 69]
console.log("original Array: ", arrOne)

let arrTwo = arrOne.slice(0, 3)
console.log("Sliced ArrTwo: ", arrTwo)
console.log("original Array After Slicing: ", arrOne)

let arrThree = arrOne.splice(0, 3)
console.log("Spliced ArrThree: ", arrThree)
console.log("original Array After Splicing: ", arrOne)