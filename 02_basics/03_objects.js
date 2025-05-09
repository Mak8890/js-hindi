//singleton ## singleton object is created using constructor method
// Object.create            will discuss later


//object literals   ## objects which are creates using literals are not singleton
const mySymbol = Symbol("key1") // how to use symbol as a key in object
//interview Qn - how to print symbol key after sumbol key is added in the object

const userObj = {
    name : "Areeb",
    "full name" : "Areeb Khan",         // you cannot access full name from 1st(dot) method do we use 2nd method
    email : "areeb@gmail.com",
    mySymbol : "myKey1",      // we cannot use symbol key directly as shown here
    age : 34,
    [mySymbol] : "mykeyReal",    // this is the correct way to add symbol as a key in object using square bracket
    location : "New Delhi",
    isLoggedin : false,
    lastLoginDays : ["Monday","Saturday"]
}


//console.log(userObj.name, userObj.location, userObj.email);          // this is the 1st way to get data from objects
//console.log(userObj["email"])            // this is the 2nd way[square notation] to get data from objects without (dot.)

//console.log(userObj["full name"])       // we can get full name only by square notation
//console.log(userObj.mySymbol);   //*o/p: myKey1 but its not return as symbol datatype it returns as string key
//console.log(typeof userObj.mySymbol)        // output is string datatype not the symbol datatype what is expected

//console.log(userObj[mySymbol])   // output is mykeyReal this is the correct way to access symbol with Sqr bracket

//Object.freeze(userObj)      // it is used to lock the values of the objects
userObj.email = "areeb@chatgpt.com"     // here email will not change as userObj is freezed in earlier line
userObj["full name"] = "mohammad areeb khan" // no change in name as object is locked
//console.log(userObj);                   // we cannot make any change in the object values

userObj.greeting = function(){
       console.log("Hello JS User");        
} 
userObj.greetingReal = function(){
    console.log(`Hello JS User, ${this.name}`)       // this is used to reference the same object
}

console.log(userObj.greeting())     // it execute function 
//console.log(userObj.greeting);      // it returns anonymous function without ()-means it returns Function reference

console.log(userObj.greetingReal());



