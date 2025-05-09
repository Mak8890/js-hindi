

function sayMyname() {
    console.log("A")
    console.log("R")
    console.log("E")
    console.log("E")
    console.log("B")
}

//sayMyname()     // it execute function

//function addTwonumber(a,b){
//    console.log(`Sum of numbers 2 and 4 is : ${a + b}`)     //correct way to use back ticks interpolation
//}

addTwonumber(2,4)

// Parameters - when we create a definition of a function then whatever we take the input are called parameters.
// Arguments - when we call a function and pass the values in that function then they are called arguments. 

function addTwonumber(a,b){
    //let result = a + b
    return a+b
}
const result = addTwonumber(3,5)
//console.log("Result is : ", result)

function loginUserMessage(username = "sam"){        //setting the default value to parameter
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
        return `${username} just logged in`     
}

//const loginuser = loginUserMessage("Areeb")
//console.log(loginuser);
//console.log(loginUserMessage("Areeb"))        //return Areeb just logged in
//console.log(loginUserMessage(""))         //return just logged in
//console.log(loginUserMessage())         //return undefined just logged in

function calculateCartPrice(num1){
    return num1                     
}
//console.log(calculateCartPrice(200,300,500,2000))  // it return the first item so output is 200


function calculateCartPriceReal(...num1){            // ... is rest operator or in some places it is spread operator
    return num1                     
}
//console.log(calculateCartPriceReal(200,300,500,2000))  // it return the array of item so output is 200,300,500,2000

function calculateCart(val1,val2, ...num1){
    return num1                     
}
console.log(calculateCart(200,300,500,2000))  // it return the first item so output is 500,2000
// 200 goes to val1, 300 goes to val2 and [500,2000] goes to array ...num1

// how to pass objects in function arguments

const user = {              // created object
    username : "areeb",
    price : 299
}

//function handleObject(anyobject){
 //   console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
//}

//handleObject(user)

function handleObject(anyobject){
    return `Username is ${anyobject.username} and Price is ${anyobject.price}`
    //console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}
const userResult = handleObject(user) 
//console.log(userResult)
console.log(handleObject(user))

const newArray = [100,200,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log("Second place value is",returnSecondValue(newArray))
//console.log(returnSecondValue([100,200,400,600]))