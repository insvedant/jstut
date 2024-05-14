let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date (2024, 1, 1)
let myCreatedDateis = new Date("2024-01-10")
// let myCreatedDateis = new Date("01-14-2024")
// console.log(myCreatedDateis.toLocaleString());

// let myTimeStamp = Date.now
// console.log(myTimeStamp());

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp()/1000));


// let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);

// `${newDate.getDate()} and the time is now`

// newDate.toLocaleString("default",{
//     weekday :"long"
// })

let newDate = new Date();
let dayOfWeek = newDate.toLocaleString("default", { weekday: "long" });
console.log(dayOfWeek);
