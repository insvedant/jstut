// const userEmail = "sayan@ai"

// if(userEmail){
//     console.log("got email");
// }else {
//     console.log("got no email"); even tho string is not a boolean value but it was considered as true
// }
// const userEmail1 = ""

// if(userEmail1){
//     console.log("got email");
// }else {
//     console.log("got no email");       as "" is an empty string so it was considered as a false value
// }
// const userEmail2 = []

// if(userEmail2){
//     console.log("got email");
// }else {
//     console.log("got no email"); even an empty array considered as true value here
// }

//falsy values
//false itself is a falsy value also Zero(0), -0, BigInt 0n, "", undefined, NaN

//except that everything else a truthy value
// "0", "false", " ", [], {}, function(){} this are also truthy values, anything inside string is a truthy


//crhecking weather array is empty or not
// const newArr = []

// if(newArr.length===0){
//     console.log("array is empty");
// }
// checking weagtherr the object is empty or not
// const newObj ={}

// if(Object.keys(newObj).length===0){
//     console.log("object is empty");
// }

// false == 0 answer will come true
// false == ""answer will come true
// 0==""answer will come true

//nullish coalescing operator(??): null undefined

// let val1 = 5 ?? 10
// console.log(val1);

// let val2 = null ?? 10
// console.log(val2);

// let val3 = 6 ?? undefined
// console.log(val3); basically it avoids null and undefined values

// let val4 = null ?? 20 ?? 4
// console.log(val4); it will print the first value that comes after the null or undefined values

// Terniary operator

// condition ? true : false this is the syntax of Terniary operator

const iceTea = 80

iceTea<= 80 ? console.log("less than 80") : console.log("more than 80");




