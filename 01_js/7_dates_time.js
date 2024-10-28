// Dates

let myDate = new Date()
// console.log(myDate.toString()); //Sun Oct 27 2024 18:09:24 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString());  //2024-10-27T18:09:24.622Z
// console.log(myDate.toDateString());   //Sun Oct 27 2024
// console.log(myDate.toJSON()); 
 //2024-10-27T18:11:24.821Z
// console.log(myDate.toLocaleDateString());  //10/27/2024
// console.log(myDate.toLocaleString()); //10/27/2024, 6:13:41 PM
// console.log(myDate.toLocaleTimeString());
//6:14:13 PM



// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2024, 0 /*month*/ ,23)
let myCreatedDate =new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM
let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1730053282140 in milliseconds
// console.log(myCreatedDate.getTime()); //1673654400000 in milliseconds

// console.log(Math.floor(Date.now()/1000));  //1730053451

let newDate = new Date();
// console.log(newDate); //2024-10-27T18:25:12.467Z
// console.log(newDate.getMonth()); //9

newDate.toLocaleString('default',{
    weekday: "long",
})