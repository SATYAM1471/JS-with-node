//singleton
//"objects" are declared using "literals" and "constructor"

//OBJECT LITERALS
// Object.create

const mySym =Symbol("key1")


const JsUser={name:"Satyam",
    [mySym] : "myKey1" /*to use it as a symbol*/,
    "fullname": "Satyam Choudhary",
    age:18,
    location:"jaipur",
    email:"satyam1343@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}  
//"{}" is object

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
console.log(typeof JsUser.mySym);

