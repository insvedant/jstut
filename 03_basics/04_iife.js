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