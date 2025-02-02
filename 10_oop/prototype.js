// let myName = "satyam   "
// let myChannel = "chai  "

// console.log(myName.trim().length);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all the objects`);
}

Array.prototype.heyHitesh = function () {
    // console.log(`Hitesh says hello`);
    
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


// INHERITENCE

const User = {
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __prot__:TeachingSupport
}

Teacher.__prot__ = User

//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherusername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherusername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()