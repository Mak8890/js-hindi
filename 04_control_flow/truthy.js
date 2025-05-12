//const userEmail = " ar@gmail.com"       // it assumes string value as true
const userEmail = ""       // it assumes empty string value as false
//const userEmail = []      // it assumes empty Array value as true

if(userEmail){
    //console.log("Got the Email");    
}else{
    //console.log("Don't get the Email");
    
}

// falsy values 
//false, 0, -0, BigInt 0n, "", null, undefined, NaN(not a number)
//truthy values
// "0", "false", " ", [], {}, function(){}

///how to check empty array

const arr = []

if(arr.length === 0){
    //console.log("Array is empty")
}

// how to check empty objects

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    //console.log("Object is empty");
    
}
// Nullish coalescing operator '??' : null, undefined
// it gets the first non null value
let val1;
//val1 = 5 ?? 10      // result is 5       
//val1 = null ?? 10       // result is 10
//val1 = undefined ?? 15      //result is 15
//val1 = null ?? 18 ?? 25          // result is 18 as it takes first not null value
val1 = 0 ?? null ?? 6               // result is 0
console.log(val1)

//terinary operator
//condition ? true : false
const iceTeaprice = 100

iceTeaprice <= 80 ? console.log("less tha 80") : console.log("more than 80");

