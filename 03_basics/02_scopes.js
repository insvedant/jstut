let a = 100
const b = 20
var c = 30

// if(true){
//     let a = 10
//     const b =20
//     console.log("inner:",a);

// console.log(a);
// console.log(b);
// console.log(c);

//let a = 100 outside is global scope and let a = 10 is block scope

function one (){
    const username = "Sayan"

    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()


if (true){
    const username= "Sayan"
    if(username==="Sayan"){
        website  = " google"
        console.log(username + website);
    }
   // console.log(website);
}
// console.log(username);

console.log(addOne(3));
function addOne(num){
    return num+1
}
addOne(3)

function addTwo (num){
    return num+2
}
addTwo(4)

//in first type you can declear function before execusion but once youre storing the value in a variable then it will give error

