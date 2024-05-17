
function myName(){
    console.log("S");
console.log("a");
console.log("y");
console.log("a");
console.log("n");
}

myName()

// function addTwoNumbers (no1 , no2){
//     console.log(no1+ no2);
// }
// const result = addTwoNumbers(1, 8)


function addTwoNumber (no1, no2){
    // let result = no1 + no2
    // return result
    return  no1+ no2
}

const result=addTwoNumber(3,4)
// console.log(result);

// function loginUserMessage (username){
//     if (username === undefined){
//         console.log("Enter a username");
//         return
//     }
//     return `${username} login successful`
// }
// console.log(loginUserMessage());

// function loginUserMessage (username= "newuser"){
//     if (!username){
//         console.log("Enter a username");
//         return
//     }
//     return `${username} login successful`
// }
// console.log(loginUserMessage());

function calculateCartPrice (val1, val2, ...num1){
    return num1
}
/// ... defines rest operator
console.log(calculateCartPrice(100,200,700,400));


function calculateCartPrice1 (...num1){
    return num1
}
/// ... defines rest operator
console.log(calculateCartPrice1(100,200,700,400));

// make an object first and then call it in a function
// const user={
//     username: "Sayan",
//     numberss:200
// }

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and numberss is ${anyObject.numberss}`);
}

// handleObject(user)

//we can also pass object directly in the function

handleObject({
    username : "sayan",
    enumber : 488
})