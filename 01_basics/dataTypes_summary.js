// 2 types - primitive, non primitive 
//primitive(Value type) - String,Number,Boolean,Null,Undefined,Symbol,BigInt

//non primitive(Reference type) - Array,Objects,Functions
// javascript language is dynamically typed

const score = 100
const scoreValue = 100.34
const isLoggedIn = true
const outsideTemperature = null
let userEmail;          //undefined

//symbol is used to give unique values ,, these two will return diffrent value
const id = Symbol('123')
const otherId = Symbol('123')

const bigNumber = 355454637723723722782n   // add 'n' at last

//console.log(id === otherId);


//Arrays
const heroes = ["ironman","hulk","spiderman"]
let myobj = {
    name:"areeb",
    age:34,
    email:"areeb@gmail.com"
}

//console.log(myobj)
//console.log(heroes);

//we can treat a function in javascript as a variable 
const myFunc =function(){
    console.log("hello from function");    
}

//console.log(typeof myFunc);         //return type of function is called object function 


//++++++++++++++++++++++++++++++++++++Memory management++++++++++

//stack memory(Primitive)
//heap memory(Non-Primitive)

let myYoutube = "areebCoder.com"            //stack

let anothername = "ultimatecoder"

//console.log(myYoutube);
//console.log(anothername);

let userOne = {
    "name" : "areeb",                   // variable useOne and userTwo goes to stack memory
    "email" : "areeb@gmail.com",        // object data goes to heap memory(reference)
     
}
let userTwo = userOne           

userTwo.email = "areebMicrosoft@gmail.com"

console.log(userOne);
console.log(userTwo);
