const user = {
    username : "areeb",
    price : 999,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`);        // this refers to the current context
        //console.log(this);        
    }
}
//user.welcomeMessage()
//user.username = "sam"       //it changes beacuse we cahnge the context
//user.welcomeMessage()

//console.log(this);
// interview Qn - what is the global object in browser --> Ans- Window object(click,form submit,)

// behavior of 'this' in Arrow Function and normal function

//function chai(){              // it gives undefined value because 'this' works on objects 
//    const username = "areeb"                  // but not in function 
//      console.log(this.username);    
//}
//chai()

//const chai = function(){             // it gives undefined value same like above
//    const username = "areeb"          // 'this' keyword don't work in functions
//    console.log(this.username);    
//}
//chai()

const chai = () => {             // it becomes arrow function '() =>'
    const username = "areeb"         // but also it gives undefined value same like above
    console.log(this);    //interview Qn- we cannot use this inside arrow function and fn
    console.log(this.username);
}
//chai()
//+++++++++++++++++++Arrow Function+++++++++++++

//const addTwo = (num1,num2) => {       // basic arrow function
//    return  num1 + num2           // this also called as Explicit return
//}
//console.log(addTwo(5,7));

const addTwo = (num1,num2) => num1 + num2   // it is implicit return in this we remove curly brackets
console.log(addTwo(5,7));       //  and return keyword from arrow function and result will be same
//addTwo                          //but it must be in written in single line        


const addTo = (num1,num2) => (num1 + num2) // other way writing implicit return using paranthesis()
console.log(addTo(9,7)); 

// interview Qn - if we use {} bracket the return keyword in function is must
//but if we use ()parantheis or without () then we don't need return keyword, 
// implicit return technoque is mostly used in react development


// if you want to return object from function

//const addTwwo = (num1,num2) => {username : "areeb"}     // it returns undefined as we used {}brackets
//console.log(addTwwo(9,7));          //if we want to return objects in function then we use ({})

const addTwwo = (num1,num2) => ({username : "areeb"})   
console.log(addTwwo(9,7));   

//example 
//const myArray = [1,2,3,4,5]
//myArray.forEach(function(){   })
//myArray.forEach(() => {})
//myArray.forEach(() => ({}))
//myArray.forEach(() => ())

