// const user={
//     userName:"dheeraj",
//     logcount:8,
//     signeIn:true,

//     getUserDetails:function(){

//         console.log(this.userName)
//     }
// }
// console.log(user.getUserDetails())
// console.log(user.getUserDetails())
function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;
}
const user1=new User("dheeraj", 8, true);
const user2=new User("neeraj", 9, false);
console.log(user1)
console.log(user2)