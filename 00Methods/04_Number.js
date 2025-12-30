
let num = 123.456;
let n = 42;


// importent methods
//number, parseInt, parseFloat, toFixed, Number.isNaN, .isInteger, toLocateString, isFinite, toString, .MAX_SAFE_INTEGER, 

// 1.NUMBER CONVERSION (STATIC)

// Number()         // String into Number
// parseInt()       // String into number (value, index) ==> 2=binary, 16 = hex, 10 is defualt
// parseFloat()     // converts a string into a floating-point number

// 2.NUMBER CHECKING (VERY IMPORTANT)

// Number.isNaN()               // check only value is NaN
// Number.isFinite()            // Checks if value is a finite number (Not Infinity, -Infinity, or NaN)
// Number.isInteger()           // Checks if value is a whole number (no decimal)
// Number.isSafeInteger()       // check number is in safe rang or not rang = -(2^53 - 1) to (2^53 - 1)

// 3.ROUNDING & FORMATTING (INSTANCE METHODS)

// toFixed(n)               // fix range of number after .
// toPrecision(n)           // fix range of total numbers
// toExponential(n)         // Scientific notation (i dont know)

// 4.CONVERSION TO STRING

// toString()               // number to string
// toLocaleString()         // Locale means (language, region, and cultural conventions)

// 5.VALUE EXTRACTION

// valueOf()                // Returns primitive number

// 6.NUMBER CONSTANTS (STATIC PROPERTIES) (i dont know yet)

// Number.MAX_VALUE;
// Number.MIN_VALUE;
// Number.POSITIVE_INFINITY;
// Number.NEGATIVE_INFINITY;
// Number.NaN;
// Number.EPSILON;
// Number.MAX_SAFE_INTEGER; // 9007199254740991
// Number.MIN_SAFE_INTEGER;

// 7.GLOBAL NUMBER HELPERS (COMMONLY USED)

// isNaN()     
isNaN("123");     // false  → "123" becomes 123
isNaN("abc");     // true   → "abc" becomes NaN
isNaN(NaN);       // true
isNaN(undefined); // true   → undefined → NaN
isNaN(null);      // false  → null → 0

// isFinite() 
isFinite(100);        // true
isFinite("100");      // true → converted to number
isFinite(Infinity);   // false
isFinite(-Infinity);  // false
isFinite(NaN);        // false
isFinite("abc");      // false
