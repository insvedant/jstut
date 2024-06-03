// const coding = [ "cpp", "javascript", "java", "python", "ruby"]

// const values =coding.forEach((items)=>{
//     console.log(items);
// })
// console.log(values);
// // forEach doesnt return values

// const myNUms = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNUms.filter((num)=>num>4)
// console.log(newNums);
// this is basics of filter

// const newNums = myNUms.filter((num)=>{
//     return num > 4
// })
// console.log(newNums);


// const newNums = []

// myNUms.forEach((nums)=>{
//     if (nums>7) {
//         newNums.push(nums)
        
//     }
// })
// console.log(newNums); // this isa using foreach function

// const newNums= []

// myNUms.forEach((nums)=>{
//     if (nums> 5) {
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'book one' , genre: 'fiction', publish: 1981, edition: 2004

    },
    { title: 'book two' , genre: 'non-fiction', publish: 1992, edition: 1992

    },
    { title: 'book three' , genre: 'history', publish: 1999, edition: 2008

    },
    { title: 'book four' , genre: 'non-fiction', publish: 1989, edition: 2010

    },
    { title: 'book five' , genre: 'science', publish: 2009, edition: 2014

    },
    { title: 'book six' , genre: 'fiction', publish: 1989, edition: 2010

    },
    { title: 'book seven' , genre: 'history', publish: 1986, edition: 1996

    },
]

// const userBooks= books.filter((bk)=> bk.genre==='history')

// console.log(userBooks);

// const newBooks = books.filter((bk)=> bk.genre==='history')
// console.log(newBooks);

// const newBooks=[]

// books.filter((bk)=>{
//     if (genre==='history') {
//         newBooks.push(bk)}
// })
// console.log(newBooks);** not working this method

let userBooks = books.filter((bk)=> bk.genre=== 'science')

//console.log(userBooks); //this is oneliner method

userBooks.filter((bk)=> {
    return bk.publish && bk.genre=== 'history'>= 1995
})
console.log(userBooks);

