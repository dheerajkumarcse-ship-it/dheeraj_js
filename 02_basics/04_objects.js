// const tinderUser= {};
// tinderUser.id=125;
// tinderUser.name="Dheeraj";
// console.log(tinderUser);


//*******OBJECT.ASSIGN()************
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const objRes=Object.assign({},obj1,obj2); // {} this curly brackets here called as target object 
                                         // and rest are source object.

// const obj3={...obj1,...obj2};
// console.log(Object.keys(obj3)) // VVI************
// console.log(Object.values(obj3)) //VVI*************

//Object Destructuring 

const course= {
    coursename:"Js in Hindi",
    price:999,
    courseInstructor:"Dheereaj"
} 

const {courseInstructor:CI}=course

console.log(CI);

   