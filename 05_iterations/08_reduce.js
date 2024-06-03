// reduce js mostly used in shopping cart, has use in react

//demo structure

// const array1= [1,2,3,4,5]
    

// const sumWithInitial = array1.reduce((
//     accumulator, currentValue) => accumulator + currentValue, initialValue);

//     console.log(sumWithInitial);


// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currVal){
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
//     return acc + currVal
// },0)
// console.log(myTotal);


// const myNums= [1,2,3,4]

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
//     return acc + currVal
// },0)
// console.log(myTotal);

//now using arrow function

// const myTotal = myNums.reduce((acc, currVal)=> acc+ currVal,0)

// console.log(myTotal);

const shoppingCart = [{
    itemName: "js course",
    price: 2999
},
 {
    itemName: "py course",
    price: 999
},
{
    itemName: "java course",
    price: 4999
},
{
    itemName: "goLang course",
    price: 3999
}
]

const cartTotal = shoppingCart.reduce((acc, items)=>acc+ items.price, 0)

console.log(cartTotal);


