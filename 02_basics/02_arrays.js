const mHeroes = ["spiderman", "CAmerica", "hulk", "ironman"]
const dcHeroes = ["superman", "flash", "Batman"]

// mHeroes.push(dcHeroes)
// console.log(mHeroes);
// console.log(mHeroes[4][1]);

// const allHeroes = mHeroes.concat(dcHeroes)
// console.log(allHeroes);// concat conjugate both arrays and returns in a new array while push just push the elements into the existing array

// spread operator

// const alNewHeroes = [...mHeroes, ...dcHeroes]
// console.log(alNewHeroes);


// const aBigArr = [1,3,3,2, [6,7,8],7,5,[4,56,3,[5,6,334]]]

// const aNewBigArr= aBigArr.flat(Infinity)

// console.log(aNewBigArr); this operator returns all object in a single array 


// console.log(Array.isArray("sayan")); this is asking if this is an Array
// console.log(Array.from("sayandhar")); breaks every object into arrrays

// console.log(Array.from({name: "Sayan"})); this is imp from interview perspective

let a1 = 10
let b1 = 20
let c1 = 30
console.log(Array.of(a1, b1, c1));

//.isArray, .fromArray and .ofArray => study them 