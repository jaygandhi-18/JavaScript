const userId = 982327;
let panalId = "12345";
var computerId = true;
id = null;

// userId = 99999; is not allowed because const value doesnot change again.

/*
not to use var 
because of issue in block scope and functional scope
*/

console.log(userId);

console.table([userId, panalId, computerId, id]);

console.table(typeof userId);


// number => 2 to power 53
// bigint
// String => ""
// boolean => true/false
// null => standalone value
// undefine
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object