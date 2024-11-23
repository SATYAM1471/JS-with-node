// const tinderUser = new Object()
const tinderUser= {}

tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    userfullname : {
        firstname:"hitesh",
        lastname : "choudhary"
    }
}
// console.log(regularUser.userfullname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 ={obj1, obj2}
Object.obj3=Object.assign(obj1,obj2)
console.log(obj3);
