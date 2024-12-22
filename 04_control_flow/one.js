// if
const isUserLoggedIn = true
const temperature = 41

// if(temperature===40){
//     console.log("less than 50");
// }else{
// console.log("temperature is greater than 50");
// }

//==(for comparing),===(for type checking of data),!==(for checking negative sign)

const score =200

// if(score>100){
//     let power ="fly"
//     console.log(`User power:${power}`);
// }
//"var" keyword have a global scope unlike const

//If "var" is written inside a block scope then it should not come out of the block scope because it will create problem 
// console.log(`User power:${power}`);


const balance =1000
// if(balance>500) console.log("test"),console.log("test2");   // it is implicit scope which is not acceptable by anyone(client)

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750"); 
// }
// else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn= true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("User logged in");
}