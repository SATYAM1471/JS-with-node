const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        // console.log(`welcome ${this.username}`);
        
    }
    return this

    // if we don't use return keyword then also it will be printed implicitly
}

const userOne =  new User("hitesh", 12 ,true)
const userTwo = new User("hitesh", 11 ,false)
// console.log(userOne);
// If we don't print userTwo then the data in userOne will be override and get changed

//To prevent this we can use new keyword

// `console.log(userOne.constructor);
// constructor if a property for itself reference
// console.log(userTwo);

// array is also an object i.e everything in javascript is an object

// even function and string is an object.
// Javascript act as an protyple inheritence, it means if it does not get the null value from child it will go to parents,grand,grand grand parents

