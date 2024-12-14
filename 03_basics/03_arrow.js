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

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username="hitesh"
    console.log(this.username);
}

// chai()
// Basic syntax of arrow "() => {}" 

// const addTwo =(num1,num2)=>{
//     return num1+num2 //Explicit return
// }

/* NOTE:- IF CURLY BRACES ARE USED THEN RETURN IS NEED TO BE WRIITEN AND IF BRACKET IS GIVEN THEN NO NEED*/

// const addTwo =(num1,num2)=>  num1+num2
// const addTwo =(num1,num2)=> (num1+num2) //impicit return

const addTwo =(num1,num2)=> ({username:"satyam"}) 

console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]
// myArray.forEach()