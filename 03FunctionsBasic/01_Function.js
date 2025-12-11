function myName() {
    console.log("J");
    console.log("a");
    console.log("y");
    return
}
// myName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }



function sumof(num1, num2) {
    // let result = number1 + number2
    // return result
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


function calculateCartTotal(...num1) {
    return num1
}

// console.log(calculateCartTotal(100, 200, 400, 5000));


const user = {
    username: "Jay",
    pass: "Jay@1234"
}

function handleObject(anyObject) {
    console.log(`My username is ${anyObject.username} and pass is ${anyObject.pass}.`);    
}

// handleObject(user);

handleObject({
    username: "hello",
    pass: "helloo123"
})

const myNewArray = [100, 200, 300, 400]
function handleArray(params) {
    return params[1]
}

// console.log(handleArray(myNewArray))
console.log(handleArray([400, 300, 200, 100]));
