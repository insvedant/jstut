//arrays

const myArr= [0,1,2,3,4,5]

const myArr2 = new Array(0,2,3,4,5,6)

// console.log(myArr[0]);
// console.log(myArr2[2]);

// array methods

// myArr.push(7)
// console.log(myArr); the given value will be added to the array in the beggining
// myArr.pop() the last value of array will be removed
// console.log(myArr);

myArr.unshift(4) //the value will be inserted in the beginnng of the array
myArr.shift() // the first value of array will be removed
//console.log(myArr.includes(9)); this is to find out wheaher 9 exists in the array
//console.log(myArr.indexOf(2)); this is to find out the position of a particular object in array

// const newArr = myArr.join()
//  console.log(newArr);
// console.log(myArr);

// console.log(typeof newArr);

console.log("A" , myArr);

const mySlice = myArr.slice(1,3)
console.log(mySlice);

console.log('B', myArr);

const mySplice = myArr.splice(1,3)
console.log(mySplice);

console.log("c", myArr);