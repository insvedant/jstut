//immediately invoked function expressions (IIFE)

(function mys (){
    //this is a named IIFE
    console.log(`DB CONNECTED`);
})();

//sometimes we have problems with global pollutions and to avoid that we use functions that execute fast we use IIFE.

//we can use arrow function for that too

// (() => {
//     console.log(`DB CONNECTED TWO`);
// })()

// ((name) =>{
//     console.log(`DB CONNECTED TWO ${name}`);
// })("Sayan")


//using arrow function

((name) => {
    console.log(`DB CONNNECTED ${name}`);
})("Sayan Dhar")


//in js there is two type of execution context. 
//1 is global execution context and 2nd is functional Execution context.
//there is another execution context eval ec. its part of global ec

//this runs in two phrase
//1 is memory creation phrase
//2nd is execution phrase
//in memory phrase it only keeps the variables.
// exp. 
// val1= 10
// val2= 5
// function addNum(num1, num2){
//     let total= (num1+ num2)
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 =(10,5);

// now in memory phrase it stores variables this way 
//val1= undefined, val2= undefined, addNum = defination, result1 = undefined, result2 = undefined

//now the execution phrase: val1= 10 , val2= 5 and the function part will be empty cuz nothing has been executed yet.
// and for the addNum part another new execution phrase will launch { it will have its own new variable environment and another execution thread}

// after execution the sandbox will be deleted and send the data to global environment


