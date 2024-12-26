//FORIN LOOP

const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(myObject[key] );
    //OUTPUT ->javascript
// c++
// ruby
// swift by apple


    //  console.log(`${key} shortcut is for ${myObject[key]}`);
//      js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple
}

const programming=["js","rb","py","java","cpp"]

for (const key in programming) {
//    console.log(programming[key]);  
}

//in "forin" loop "map" is not iterable

// Use for...in for objects where you need to access property keys.

// Use for...of for iterables where you need to access values (e.g., arrays, strings, maps).