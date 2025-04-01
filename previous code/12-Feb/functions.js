function addTwoNum (num1, num2){
    let result = num1 + num2;
    console.log(result);

    // return num1 + num2

    return result;
    console.log("Hello!")
}

addTwoNum(10, 15);
addTwoNum(10, "15"); // bruh
addTwoNum(10, "abc"); // bruh


function welcomeUser(username = "UnknownUser"){
    return `Hello ${username}`
}
var login_info = welcomeUser("Piyush")
console.log(login_info);

// ek function banata hu jisme user hi login karega but agar vo aapni detailes nahi deta ha to uske liye ek randome name bana do!!
// Date = 25/02/25

function randNameWithID(){
    let name = "User";
    let id = Math.floor
}

function alert(username = randNameWithID()){
    console.log(`Hello ${username}, Welcome to my website!`)
}