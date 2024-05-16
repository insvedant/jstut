const course = {
    courseName: "js in github",
    price: "my time",
    courseLearner: "Sayan"
}
// course.courseLearner // old method

// const {courseLearner} = course
// console.log(courseLearner);
// now to deastructure we can do this method

const{courseLearner: learner}= course
console.log(learner);

//objects in curly braces basically means destructuring this is imp for react.

