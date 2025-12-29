const myString = "Hello My Name Is Jay";
const newString = "           , I am 20 years old         ";
const numbers = 1234567890;

// importent methods
// length,toUpperCase,toLowerCase,includes,slice,trim,split,replace/replaceAll,startsWith,endWith,indexOf

// Access & Character Methods

console.log(myString.charAt(1));            // character at key position
console.log(myString.charCodeAt(6));        // utf code of character at position
console.log(myString.codePointAt(0));       // utf code of character and also support emojis
console.log(myString.at(-1));               // same as 
console.log(myString[0]);                   // mainly use in array to tell character at key position

// Length

console.log(myString.length);               // tell us length of string

// Case Conversion

console.log(myString.toUpperCase());        // convert string to uppercase
console.log(myString.toLowerCase());        // convert string to lowercase
console.log(myString.toLocaleUpperCase());  // Locale means (language, region, and cultural conventions)
console.log(myString.toLocaleLowerCase());

// earching & Checking

console.log(myString.includes("My"));           // Check that String includes "My" true or False
console.log(myString.startsWith("Hello"));      // Check that String Starting With "Hello" Ture or FLase
console.log(myString.endsWith("y"));            // Check that String Ending With "y" Ture or FLase
console.log(myString.indexOf(" "));             // tell use frist key location of given word and if does not found its -1
console.log(myString.lastIndexOf(" "));         // tell use Last key location of given word and if does not found its -1
console.log(myString.search(" "));              // it Search and frist tell key location of given Word

// Extracting Parts (VERY IMPORTANT)

console.log(myString.slice(0, 4));                  // 0 is start, 4 is end retune newString
console.log(myString.substring(6, 15));             // same but old
console.log(myString.substr(0, 7));                 // 0 is start, 7 is lenght so from 0 key to total 7 values

// Replace & Modify

console.log(myString.replace("Hello", "Hii"));          // replace frist selected string with given one
console.log(myString.replaceAll(" ", "-"));             // replace all selected String with given one
console.log(myString.concat(newString));                // mearge 2 string 
console.log(myString.repeat(3));                        // reapeat string 3 times
console.log(newString.trim());                          // remove space from start and end
console.log(newString.trimEnd());                       // remove extra space from only end
console.log(newString.trimStart());                     // remove extra space from end only
console.log(myString.padEnd(25, "."));                  // 25 will total size of string "." value add till size end at end of string
console.log(myString.padStart(25, "."));                // 25 will total size of string "." value add till size end at start of stirng

// Splitting & Joining

console.log(myString.split(",",2));
// .split()        ==> no change
// .split("")      ==> every character splite incude space
// .split(" ")     ==> every word splite
// .split(",",3)   ==> frist 3 words only


// Comparing

console.log(myString.localeCompare(newString));            // check string is ===
// -1 (Negative)	The reference string comes before the compared string.
//  1  (Positive)	The reference string comes after the compared string.
//  0              	The strings are equal.

// Regular Expression Helpers

// console.log(myString.match);                         //
// console.log(myString.matchAll);                      //
console.log(myString.replace(" ", "   "));              // replace frist
console.log(myString.replaceAll(" ", "-"));             // replace all
console.log(myString.search("Is"));                     // search is and tell key position of I and if not found its -1

// Conversion

const convToString = numbers.toString();                    // convert any datatype to string
console.log(typeof numbers);                                // 
console.log(typeof convToString);                           //

console.log(myString.valueOf());                            // to get real value

