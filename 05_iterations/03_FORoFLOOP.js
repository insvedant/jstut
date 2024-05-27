//for of

// ["", "", ""]- you can take Strings in an array
// [{}, {}, {}]- can also take ojects in an array

// const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {

 // }** here give any name of iterator as its right after const and the object is the array name decleared up there , its not same as javascript object, its used in a broader term like in which object you want to use the loop
    


// for (const numArr of arr) {
//     console.log(numArr);
// }

// const myArr = [1, 2, 3, 4, 5]

// for (const newArr of myArr) {
//     console.log(newArr);
// }

// const myName ="sayan dhar"

// for (const myNameis of myName) {
//     console.log(`Each char is ${myNameis}`);
// }

// const greetings = 'hello world!'
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//map

const map = new Map()

map.set("IN", "India");
map.set("Fr", "France");
map.set("RUS", "Russia");
map.set("DE", "Germany");

//console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
// }

for (const [key, value] of map) {
    console.log(key, ":->", value);
}