// const coding = [ "cpp", "javascript", "java", "python", "ruby"]

// const values =coding.forEach((items)=>{
//     console.log(items);
// })
// console.log(values);
// // forEach doesnt return values

const myNUms = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNUms.filter((num)=>num>4)
// console.log(newNums);
// this is basics of filter

const newNums = myNUms.filter((num)=>{
    return num > 4
})
console.log(newNums);
