// theres mainly two types of data 1) Primitive and 2)non-primitive or reference type

//theres 7 types of primitive datatypes - string, number, boolean, null, undefined, symbol, BigInt

// const score = "100"
// const scoreValue = 100.2
// const isLoggedIn = true
// const outsideTemp = null
// let userEmail; // this is undefined datatype
// const id = symbol("123")
// const anotherId = symbol("123")

// console.log(id === anotherId);

// theres three types of non-Primitive or reference type datatypes

//1)object 2)functions 3)array

// const myFunction = function(){
//     console.log("hello world");
// }
// console.log(typeof myFunction);

//number => number
// boolean => boolean
// string => string
// symbol => symbol
// null => null
// undefined => undefined

// array => Object
// object => object
// function => function






// theres two types of memories 1) stack and 2)heap

//primitive datatypes are stored in stack memory
//Non-primitive datatypes are stored in heap memory
// from stack memory we get a copy of a memory and from heap memory we get the reference that is real data where we make changes

let myYoutubeName = "abc"
let anotherName = myYoutubeName 
anotherName = "xyz"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@sbi"
}
let usertwo = userOne;

usertwo.email = "sayan@mail.com"

console.log(userOne.email);

console.log(usertwo.email);