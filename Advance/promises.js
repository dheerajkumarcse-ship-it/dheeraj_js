// const promiseOne = new Promise(function(resolve,){
//     //db calls, cryptography, network call, 
//     setTimeout(function()
//     {
//        console.log('Async task is complete') 
//        resolve()
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Sync task 2")
//             resolve()
        
//     },1000)
// }).then(function(){
//     console.log("Asyc 2 Resolved")
// })

// const PromiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"dheeraj", email:"dheerajkr@gmail.com"})

//     },1000)
// })

// PromiseThree.then(function(user){
//     console.log(user)

// })

// const promiseFour= new Promise(function(resolve,reject){

//     setTimeout(function(){

//         let error=true;
//         if(!error)
//         {resolve({username:"dheeraj", password:"123"})}
//         else{
//             reject("Error! something went wrong")
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
// console.log(username)
    
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resove or refected")
// })


const promiseFive=new Promise(function(resolve,reject){

    setTimeout(function(){

        let error=true;
        if(!error)
        {resolve({username:"dheeraj", password:"123"})}
        else{
            reject("Error! something went wrong")
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response= await promiseFive;
        console.log(response)
    }
    catch(error)
    {
        console.log(error)
    }
    
}
consumePromiseFive();