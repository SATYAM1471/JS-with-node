//const score=100;

const heros =["shaktiman","naagraj","doga"];
let myObj={
    name:"satyam",
    age: 22,
}

const myFunction =function(){
    console.log("Hello World");
}

//console.log(typeof score);  //number
//console.log(typeof myFunction); //function



//++++++++++++++++++++++++++++++++++++

//Stack(Primitive) ,Heap(Non-primitive)

let myYoutubename = "satyamdotcom"

let anothername=myYoutubename

//console.log(anothername); //satyamdotcom


anothername = "Pokemondotcom"


console.log(myYoutubename);  //satyamdotcom
console.log(anothername);  //Pokemondotcom

let userOne ={
    email: "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "satyam@google.com"

console.log(userOne.email);//satyam@google.com
console.log(userTwo.email); //satyam@google.com
