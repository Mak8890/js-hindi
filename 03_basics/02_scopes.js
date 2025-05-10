{} // -- these are called scope, it comes with functions, if else and loops
//var c = 300


let a =300
if(true)
{
    let a = 10
    const b = 20
    var c = 30  //or  c = 40 result will be same     
    //console.log("from block scope", a)
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

//console.log("from global scope", a)

//this is example of closure when inner function access variable of outter function(nested functions)
function one(){
    const username = "areeb"

    function two(){
        const website = "youtube"
        console.log(username);        
    }
    //console.log(website)           //error website is not defined

    two()
}

//one()

// other way

if(true){
    const username = "areeb"
    if(username === "areeb"){
        const website = " youtube"
        console.log(username + website);        
    }
    //console.log(website)          //error website is not defined
}
//console.log(username)              //error username is not defined

// ++++++++++++++++++++++++++++++++interseting++++++++++++++
// +++++++++++++++++++hoisting concept+++++++++++++
console.log(addOne(5))
function addOne (num){
    return num + 1
}

//addTwo(5)         //Cannot access 'addTwo' before initialization as addtwo gets the return value
const addTwo = function(num){       // this declaration type is also known as expression
    return num + 2
}
