const myArray = [10, 20, 30, 40, 50];
const mixedArray = [1, "Jay", true, null, { age: 20 }, [100, 200]];

// Accessing Elements

console.log(myArray[0]);              // first element
console.log(myArray.at(-1));          // last element
console.log(myArray.length);          // total number of elements

// Adding & Removing (MUTATES ORIGINAL ARRAY)

myArray.push(60);                     // add element at end
myArray.pop();                        // remove element from end
myArray.unshift(0);                   // add element at start
myArray.shift();                      // remove element from start

// Combining & Slicing

console.log(myArray.concat([60, 70])); // merge arrays 2 array
console.log(myArray.slice(1, 4));      // extract from index 1 to 3 last key value does not count
console.log(myArray.splice(2, 1, 99)); // remove 1 item from index 2 & insert 99

// Searching & Checking

console.log(myArray.includes(30));     // true / false
console.log(myArray.indexOf(40));      // index or -1
console.log(myArray.lastIndexOf(20));  // last occurrence index
console.log(Array.isArray(myArray));   // check if array

// Iteration (LOOPS)

myArray.forEach((item, index) => {
  console.log(item, index);            // loops over array (arrow function)
});

const doubled = myArray.map(num => num * 2);       // transform each element
const filtered = myArray.filter(num => num > 25); // filter based on condition
const total = myArray.reduce((acc, curr) => acc + curr, 0); // reduce to single value

// Sorting & Reversing

const nums = [3, 1, 10, 5];

nums.sort();                           // WRONG for numbers (works in UTF-16 Codes)
nums.sort((a, b) => a - b);            // for number ascending sort
nums.sort((a, b) => b - a);            // for number descending sort
nums.reverse();                        // reverse array 

// Flat & Fill

const nested = [1, [2, [3, 4]]];

console.log(nested.flat());            // [1, 2, [3, 4]] flat(infinity)for all
console.log(nested.flat(2));           // [1, 2, 3, 4]

console.log(myArray.fill(0, 1, 3));    // fill 0 from index 1 to 2

// Joining & Converting

console.log(myArray.join("-"));        // convert array to string
console.log(myArray.toString());       // array → string
console.log(String(myArray));          // array → string

// Finding Elements

console.log(myArray.find(num => num > 25));       // first matching element
console.log(myArray.findIndex(num => num > 25));  // index of first match

// Condition Checking

console.log(myArray.some(num => num > 40));       // at least one true
console.log(myArray.every(num => num > 5));       // all must be true

// Copying & Creating Arrays

const copy1 = [...myArray];            // spread operator (BEST way)
const copy2 = Array.from(myArray);     // create array from iterable
const copy3 = Array.of(1, 2, 3);        // create array from arguments

// valueOf()

console.log(myArray.valueOf());        // returns array itself
