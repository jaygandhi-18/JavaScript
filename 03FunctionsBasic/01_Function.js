function myName() {
    console.log("J");
    console.log("a");
    console.log("y");
    return
}

// myName()

function sumof(num1, num2) {
    return num1 + num2
}

const result = sumof(1,8)
// console.log("result: ", result);

function userLoginChack(user){
    if(!user){
        console.log("Please Enter UserName!")
    } else {
        console.log(`${user} Just Logged In`);
    }   
    return
}

const output = userLoginChack("Jay")
console.log(output);
