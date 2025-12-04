//  Primitive

/*  

    7 types : String  =>  ""
              Number  =>  1234567890
              Boolearn  =>  true/flase(0/1)
              null  =>  empty
              undefined  =>  variable declare but value not given
              Symbol  =>  use for making value uniqe
              BigInt  =>  for bigger number value

*/

// String
const myName = "jay";

// Number
const age = 20;

// Boolearn
const male = true;

// null
const temp = null;

// undefined
let height;

// Symbol
const id = Symbol('123');
const uId = Symbol('123');

// BigInt
const bigNumber = 98763784547365267n;

console.log(typeof myName);
console.log(typeof age);
console.log(typeof male);
console.log(typeof temp);
console.log(typeof height);
console.log(id === uId);
console.log(id);
console.log(uId);
console.log(typeof bigNumber);


// Reference (Non primitive)

/*
    3 type : Array
             Objects
             Funcations
*/

// Array
const heros = ["Luffy", "Zoro", "Sanji"];

// Objects
let myObj = {
    name: "Jay",
    age: 20,
}

// Function

const myFunction = function(){
    console.log("Hello World");
}