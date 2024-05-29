const coding = [ "js", "python", "cpp", "ruby", "java"]

//using function for callback function
coding.forEach( function(items){
    //console.log(items);
})
// using arrow function
coding.forEach( (val)=>{
    //console.log(val);
} )

//call back function basic structure - object.forEach then () then function or arrow function and dont give name of the function and then inside {} run any quaries

// function printMe(items){
//     console.log(items);
// };

// coding.forEach(printMe)


// function printThis(items){
//     console.log(items);
// }

// coding.forEach(printThis)

// coding.forEach((items, index, arr)=>{
//     console.log(items, index, arr);
// })

const myCoding =[{
    langueageName: "javaScript",
    languageCode: "js"
},
{
    langueageName: "python",
    languageCode: "py"
},
{
    langueageName: "java",
    languageCode: "java"
}]

myCoding.forEach((items)=>{
 console.log(items.langueageName);
})

// this is calling back the values of an item name from the obejects inside an array using loop {this is important}




