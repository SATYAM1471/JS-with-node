//Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
    
})();
// IIFE is used to remove the pollution caused by global scope and to get the code executed smoothly

( () => {
    console.log(`DB CONNECTED TWO`);
    
} )()