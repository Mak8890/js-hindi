{} // -- these are called scope, it comes with functions, if else and loops
//var c = 300


let a =300
if(true)
{
    let a = 10
    const b = 20
    var c = 30  //or  c = 40 result will be same     
    console.log("from block scope", a)
}
// all the variables a,b,c are declared inside if scope so technically it doesn't have to be accesses outside if

for(let i = 0; i < Array.length; i++){
    const element = Array[i]
    console.log()
}
//console.log(a)      // a is not defined error as it cannot be accessed outside if scope
//console.log(b)      // b is not defined error as it cannot be accessed outside if scope
//console.log(c)          // c return 30 means c is accessed outside the scope of if which a issue
// due to  this reason we avoid using var for declaring variables instead we use let and const only..

console.log("from global scope", a)
