//singletons

//object literals

//Object.create **this is how you make a constructive object**

// this is how you make an object
const mySym = Symbol("key1")
const jsUser ={
    name : "Sayan",
    "full name" : "sayan dhar",
    age: 20,
    email: "syaan@XYZ.COM",
    location: "kolkata",
    isLoggedIn : false,
    lastLoggedIn : ["monday", "Friday"],
    [mySym] : "mykey1",
}
console.log(jsUser.name);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);

//to overwrite values just use assign

jsUser.email = "ssayan@xuxu"
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// Object.freeze(jsUser);
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello there");
}
jsUser.greetings2 = function(){
    console.log(`hello there, ${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser["greetings"]);

console.log(jsUser.greetings2());