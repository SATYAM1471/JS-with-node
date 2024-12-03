function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){

    // let result=number1 + number2
    // return result
    return number1 + number2
}
let  result = addTwoNumbers(3,4)

// console.log("Result: ",result);

function loginUserMessage(username="Satya"){
    if (!username) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}
// loginUserMessage("satyam")
// console.log(loginUserMessage("Satyam"))

function calculateCartPrice(val1,val2,...num1){
    //(...) is a REST OPERATOR
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"satyam",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"satya",
    price:399
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
