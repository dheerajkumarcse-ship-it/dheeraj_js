function multiplyBy5(num)

{
    return num*5;
}

console.log(multiplyBy5(5));


function createUser(username, score){
    this.username=username;
    this.score=score;

}


createUser.prototype.increment= function(){
    this.score++;
}
const user1= new createUser("dheeraj", 10);
console.log(user1);