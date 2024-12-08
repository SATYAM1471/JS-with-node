const user ={
    username: "satyam",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    }
}
//"this" keyword is used to refer to the current context i.e value


// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    console.log(this);
    
}
chai()