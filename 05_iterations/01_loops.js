//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 4; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

for( let i =0; i<=6; i++){
    const element = i;
    if(element==2){
       // console.log("2 is my lucky number");
    }
    //console.log(element);
}

for (let i = 0; i <= 4; i++) {
   // console.log(`Outher loop ${i}`);
   for (let j = 0; j <=4; j++) {
   //console.log(`Inner loop value ${j} and inner loop ${j}`);
   //console.log(i + "*" + j + "=" + i*j);
   }
    
}

// let myArray = ["Batman", "Superman", "Flash"]

//console.log("length of this array", myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// for (let index = 1; index <=20; index++) {
//     if(index == 7){
//         console.log(`7 is detected`);
//         break
//     }
//     console.log(`value of element is ${index}`);
// }

// for (let index = 1; index <=20; index++) {
//     if(index == 7){
//         console.log(`7 is detected`);
//         break
//     }
//     console.log(`value of element is ${index}`);
// }
for (let index = 1; index <=6; index++) {
    if(index == 3){
        console.log(`3 is detected`);
        continue
    }
    console.log(`value of element is ${index}`);
}

