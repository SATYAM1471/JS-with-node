## What are the different data types in JavaScript?
JavaScript has primitive types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) and 
non-primitive types (Object, Array, Function).

## Explain the difference between == and ===.
== checks for value equality with type coercion, while === checks for both value and type equality.

## What is the difference between var, let, and const?

var is function-scoped and allows redeclaration.
let is block-scoped and does not allow redeclaration.
const is block-scoped and cannot be reassigned.

## What is hoisting in JavaScript?
Hoisting moves variable and function declarations to the top of their scope before execution. var is hoisted with undefined, while let and const are hoisted but not initialized.

- Example
var a;  // Hoisted with default value 'undefined'
console.log(a); // undefined
a = 10;
console.log(a); // 10

## Explain closures and give an example.
A closure is a function that retains access to its outer scope even after the outer function has executed.
i.e the local varibale is called using inner 
- Example
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2

## What is the difference between synchronous and asynchronous programming?

- Synchronous: Code executes line by line, blocking the execution of subsequent code.
- Asynchronous: Code executes non-blockingly, using callbacks, Promises, or async/await for handling tasks like API calls.

## How does the event loop work in JavaScript?
The event loop manages asynchronous operations by taking tasks from the callback queue and executing them when the call stack is empty.

## What is the difference between call(), apply(), and bind()?

- call(): Invokes a function with a given this value and arguments passed individually.
- apply(): Similar to call(), but arguments are passed as an array.
- bind(): Returns a new function with a bound this value, which can be invoked later.

## What are Promises and async/await? How do they work?
A Promise represents a future value with three states: pending, resolved, rejected.
async/await simplifies handling Promises by allowing asynchronous code to look synchronous.

- Example 

function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data"), 1000));
}

async function getData() {
    let data = await fetchData();
    console.log(data);
}
getData();

## What is the difference between deep copy and shallow copy?

Shallow Copy copies only the first level of an object; nested objects remain referenced.
Deep Copy creates a completely new copy, independent of the original object.

-Example
let obj1 = { a: 1, b: { c: 2 } };
let shallow = { ...obj1 }; // Shallow copy
let deep = JSON.parse(JSON.stringify(obj1)); // Deep copy

## How does JavaScript handle memory management and garbage collection?
JavaScript uses automatic garbage collection via reference counting and mark-and-sweep to free memory occupied by unreachable objects.

## Explain how JavaScript handles prototype inheritance.
JavaScript uses prototype-based inheritance, where objects inherit properties and methods from their prototype.


function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log("Hello, " + this.name);
};
let user = new Person("Alice");
user.greet(); // Hello, Alice