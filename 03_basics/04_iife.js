//Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
    
})();
// IIFE is used to remove the pollution caused by global scope and to get the code executed smoothly


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Satyam' )// name

// sometimes ";" can be a reason for errror in the program.We can take the example of above two function
const chai = () => {
    let username="hitesh"
    console.log(this.username);
} 
console.log(chai.username);
