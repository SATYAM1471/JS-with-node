// var c = 300
let a =300

// "{}" can be found in objects and functions, there it is called the scope of function here it is scope.
if(true){
    let a= 10
    const b= 20
    // console.log("INNER: ",a);
}



//inside if loop the content is called as BLOCK SCOPE and outside the loop is called GLOBAL SCOPE
// whatever is written in global scope is available for block scope but the content inside the block scope will not be available for global scope 


// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username ="satyam"

    function two (){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

// in nested functions CHILD function can access the "variables" of PARENT function

if (true) {
    const username ="satyam"
    if (username=="satyam") {
        const website=" youtube"
        // console.log(username +  website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++INTERESTING+++++++++++++
addone(5)
function addone(num){
    return num + 1
}
console.log(addone(5));




const addTwo = function(num){
    return num +2
}
addTwo(5)
