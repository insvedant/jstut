//map 

const myNums = [1,2,3,4,5,6,7,8,9]

//const newNUms = myNums.map((nums)=> nums + 10)
//console.log(newNUms);

// const newNums2 = myNums.map((nums)=>{return nums+ 100} )
// console.log(newNums2);


//const newNums2 = myNums.map((nums)=>{
   // return nums+ 11
//})
//console.log(newNums2);

//CHAINING FUNCTIONS

// const newNums = myNums
//         .map((num)=> num*10)
//         .map((num)=> num +1)
//         .filter((num)=> num >40)

// console.log(newNums);

// chain functions
const newNUms = myNums
                    .map((num)=> num*10)
                    .map((num)=> num+1)
                    .filter((num)=> num>=51)

console.log(newNUms);

