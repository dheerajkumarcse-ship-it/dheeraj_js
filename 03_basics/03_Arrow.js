const user={
    username:"dheeraj",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to the website`)
    }
}

user.welcomeMessage();
user.username="neeraj"
user.welcomeMessage();
fsd