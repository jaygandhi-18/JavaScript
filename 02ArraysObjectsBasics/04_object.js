// const tinderUser = new Object() //single
const tinderUser = {}  // multi

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jay",
            lastname: "Gandhi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj3 = {5: "a",6:"b"}

const obj4 = Object.assign({},obj1,obj2,obj3)  
// if we donot add {} this all value store in obj1 so if we print obj1 or obj4 both value will be same 
// console.log(obj1);
// console.log(obj4);


const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

