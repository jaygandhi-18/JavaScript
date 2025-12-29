const user = {
  name: "Jay",
  age: 20,
  city: "Gujarat",
  isLoggedIn: true
};

// importent methods
// keys,values,entries,assign,Spread Operator ... , hasOwnProperty() / Object.hasOwn(), freeze, forIn, fromEntriess, create

// 1.OBJECT CREATION & BASIC CHECKS

// Object() // to crate new object
// Object.create() // Make a new object that inherits from this object.
// const copy = Object.assign({}, obj1, obj2, obj3);  //  all store in {} that store in copy
// Object.is()  // check ===


// 2.KEYS, VALUES, ENTRIES (VERY IMPORTANT)

// Object.keys()            // get keys
// Object.values()          // get values
// Object.entries()         // get full entries key : value
// Object.fromEntries()     // array to abject

// 3.CHECKING PROPERTIES

// hasOwnProperty()         // check that object has that key or not
// Object.hasOwn()          // morden method
// in                       // same

// 4.FREEZE, SEAL, EXTEND

// Object.freeze()              // cant do any thing no change no delete no add
// Object.isFrozen()            // check that pbject is frozen true or flase
// Object.seal()                // only change no add no delete
// Object.isSealed()            // check that object is seal or not
// Object.preventExtensions()   // change delete but dont add
// Object.isExtensible()        // chech that true or flash

// 5.PROTOTYPE METHODS

// Object.getPrototypeOf()
// Object.setPrototypeOf()

// 6.PROPERTY DESCRIPTORS (ADVANCED)

// 7.OBJECT ITERATION

// for in
// for (let key in user) {
//   console.log(key, user[key]);
// }

// entries + loop
// for (let [k,v] of Object.entries(user)) {
//   console.log(k, v);
// }


// 8.CONVERSION

// toString()           // onverts a value into a string (text).
// valueOf()            // Returns the original (primitive) value of an object.

// 9.COMPARISON & COPYING

// const copy1 = { ...user };       // spread obj and add into new
// const deep = JSON.parse(JSON.stringify(user));    // dont know yet
