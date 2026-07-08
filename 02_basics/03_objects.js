//singleton

//object literals.

// const JsUser={
//     name:"Dheeraj",
//     age:37,
//     location:"Patna",
//     Email: "dheerajkumar.cse@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday", "Sunday"],
// };

//How to declare Symbol

const mySym=Symbol("key1");
const JsUser={
    name:"Dheeraj",
    [mySym]:"mykey1",
    age:37,
    location:"Patna",
    Email: "dheerajkumar.cse@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Sunday"],
};

console.log(JsUser[mySym]);

