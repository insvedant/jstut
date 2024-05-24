//if

// if (2!= 3){
//     console.log("executed");
// }
// if (2==="2"){
//     console.log("aa");
// }
// const temp = 57
// if(temp< 50){
//     console.log("temp less than 50");
// } else{
//     console.log("temp greater than 50");
// }
//the condition inside if function should be true only then it will print otherwise the else function will come into play.

// const score = 200
//  if (score> 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
//  }

//short hand notation

// const bal = 1000
// if (bal>500) console.log("test");

// const bal = 100
// if(bal<500){
//     console.log("less than 500");
// }else if (bal < 750){
//     console.log("less than 750");
// }else{
//     console.log("more than 900");
// }

const userLoggedIn = true
const debitCard = true
const userLoggedinFromGoole = true
const userLoggedinFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow login");
}
if(userLoggedinFromGoole || userLoggedinFromEmail){
    console.log("allow buy");
}

