const myArray = [10, 20, 30, 40, 50];
const mixedArray = [1, "Jay", true, null, { age: 20 }, [100, 200]];

// importent methods
// push,pop,map,filter,reduce,forEach,find,inclues,slice,splice,sort,join,flat

// 1. Creation & Static Methods

Array(newArr = [1,2,3,4,5])                // to create new array
console.log(newArr);
const arr = Array.of(6,7,8,9,0)            // to Create array from given list 
console.log(arr);
const arr2 = Array.from("abcd")            // create array form given iterable
console.log(arr2);
console.log(Array.isArray(arr));           // true or false

// 2. Length

console.log(arr.length);                // tell us total length of array

// 3. Adding / Removing Elements (IMPORTANT)

myArray.push(60);               // add 60 in array at last
myArray.pop();                  // remove last value from array

myArray.unshift(1);             // add 1 in array at Start
myArray.shift();                // Remove first value from array

// 4. Merging & Copying

const concatArr = newArr.concat(arr)            // MERGE 2 array (but only 2 at once)
console.log(concatArr);

const sliArr = concatArr.slice(1,8);            // start from 1 key value and cut till 8 key value but 8th not inclues
console.log(sliArr);

// splice()       // also same as string splice(0 `start from 0`, 3 `remove 3 value`, 1,2,3 `add this value from 0`)

const withArr = concatArr.copyWithin(0, 6, 7)
console.log(withArr);
// its target 0 and slecet key value 6 ot 7 means only 1 so it replace selected value to target ones
// if we select more than one value its revmove more value from start and enter selected value at start
// leanght not change

//fill(value, start, end)
const fillArr = concatArr.fill(6) // fill arr with given value
concatArr.fill(0,)
console.log(fillArr);

// 5. Searching & Checking

const findArr = ["cat","dog","pig","fish","dog","nose","ear","pig"];

console.log(findArr.includes("cat"));             // true or flase
console.log(findArr.indexOf("pig"));              // find first index number
console.log(findArr.lastIndexOf("pig"));          // find last index number
// console.log(findArr.find());                   // find need callback fn and first match only
// console.log(findArr.findIndex());              // also need callback fn and first match only
// findLast()                   // Last match
// findLastIndex()              // Index from end

// 6. Iteration Methods (VERY IMPORTANT)

// forEach()	nothing    // loop
// map()	new array    // apply function array
// filter()	new array    // filter from array
// reduce()	single value    // take array and writen in one value 
// reduceRight()	single value    // same as reduce but start from right side 
// some()	boolean    // means if one condision match is say yes
// every()	boolean    // if single condition doesnot match it says no

// 7. Sorting & Reversing

// sort()                // Sort array in UTF-16 code formate
// sort((a,b) => a-b)    // sort for number
// reverse()	         // reverse array 
// toSorted()            // sort array and wite in new array
// toReversed()          // reverse array and wite in new array

// 8. Converting to String

// join()                   // conver into string
//join()      // "1,2,3"
//join("")    // "123"
//join("-")   // "1-2-3"

// toString()               // conver into sring but , only
// toLocaleString()         // conver into string in locale formet
// Locale means (language, region, and cultural conventions)

// 9. Flattening Arrays

// flat()        // flar array means if array in array in array its make in sigle array
// flat(infinity) means all

// flatmap()     // map() + flat(1)

// 10. Iterator Methods

// keys()          // to access keys 
// values()        // to access values
// entries()       // to access key : value

// 11. New Immutable Methods

// with()               // replace one item with out touch array
// toSpliced()          // splice() but safe
