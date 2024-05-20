const user ={
    username: "Sayan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welconme to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username= "Rajat"
// user.welcomeMessage()

// console.log(this);

// function shreeram(){
//     let username =  "sayan"
//     console.log(this.username);
// }
// shreeram()

// const shreeram = function(){
//     let username= "sayan"
//     console.log(this.username);
// }
// shreeram()

const shreeram =()=>{
    username = "sayan"
    console.log(this.username );
}
// shreeram()

//syntax of arrow function is ()= {} thats it 
//now you can hold the value in a variable like const abc = ()=>{} exp below

const addTwoNum =(num1, num2)=>{
    return num1+ num2
}
console.log(addTwoNum(2, 5))

//we can also use implicit return 

const addTwoN =(numX, numY) => numX +numY //also can use (numX + numY) thats more helpful in react 
console.log(addTwoN(4, 5));

const returName =(numX, numY) => ({username : "Sayan"})
console.log(returName());