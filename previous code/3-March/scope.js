var c = 1000
// if (true){
//     let a = 30
//     const b = 120
//     var c = 240
// }
    
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const name = "Piyush"

    function two(){
        const website = "camera"
        console.log(name)
    }
    console.log(website)
    two()
}

// one()

// ++++++++++++++++++ Hoisting ++++++++++++++++++
// Revision needed ... (5 March)


// THIS keyword
const user = {
    name: "Piyush",
    age: 20,
    loginMsg: function(){
        console.log(`Hello ${this.name}`);
    }
}

user.loginMsg()
console.log(user)
user.name = "Shivam"
user.loginMsg()
console.log(user)

console.log(this)