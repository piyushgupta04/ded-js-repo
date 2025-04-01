// Objects literal


// symbol declare kar rha hu-
const key1 = Symbol("Key-1")

const newObj = {
    name: "Piyush",
    num: 12112,
    "nickname": "xD",
    // Symbol aise hi declare karte ha object me,
    [key1]: "symbol description",
    loggedIn: false,
    loggedInDays: ["Monday", "Tuesday", "Friday"],
}

// syntax to access any object-
// console.log(newObj.loggedInDays);

// another way to access-
// console.log(newObj["nickname"]);

// advantage of using square brackets are when you are accessing an Symbol, it's quite easy then!

// console.log(newObj[key1])

// to change any value of an object's key
// newObj.loggedIn = true;

// console.log(newObj["loggedIn"])

// you can also freeze any object to prevent changing it again-
// Syntax-

// Object.freeze(newObj);
newObj.loggedIn = true;
// console.log(newObj);

// function ka bhi ha object me use kar sakte ho ...
newObj.newGreeting = function(){
    console.log(`Hello, ${this.name}\nWelcome!!!`);
}

// console.log(newObj.newGreeting());


// Object singleton,
// const systemUser = new Object();

const systemUser = {}
systemUser.name = "Piyush"
systemUser.mail = "piyush@gmail.com"
systemUser.isLoggedIn = false

// console.log(systemUser)

const currentUser = {
    name: "notPiyush",
    age: 20,
    fullName : {
        firstName: "Piyush",
        lastName: "Gupta",
    }
}
// console.log(currentUser)


// combining Objects ...
const obj1 = {
    mail: "piyush@gmail.com",
    phoneNo: 12112,
}
const obj2 = {
    mail1: "piyushgupta@gmail.com",
    phoneNo1: 1234567890,
}

// *wrong way to combine 2 objects ...
// const obj3 = {obj1, obj2}
// console.log(obj3)

// *Correct way-
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// *ye spread operator se bhi kar sakte ha ... 
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// Jab database se value aayegi to array of objects me aayegi ...

const users = [
    {
        username: "Piyush",
        userId: "rtd886j465yue",
    },
    {
        username: "Piyush",
        userId: "rtwgutihiuy",
    },
    {
        username: "Piyush",
        userId: "3568ehegilrhyue",
    },
    {
        username: "Piyush",
        userId: "r56uytiyue",
    },
    {
        username: "Piyush",
        userId: "rt89346y6yue",
    }
]

// console.log(users[0].username)

// console.log(newObj);
// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));
// console.log(Object.entries(newObj));

// console.log(newObj.hasOwnProperty("number"))

// destructure of Object

const myObj = {
    name: "Piyush",
    course: "BCA",
    skills: "Web Dev",
    phoneNo: "12112",
}

// aab isko access karne ke liye ye tarika ha,
console.log(myObj.skills);

const {skills} = myObj

console.log(skills);

// JSON ka overview mil gaya ha,
// Javascript object notation.


