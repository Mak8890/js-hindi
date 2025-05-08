// arrays

const myArr = [0,1,2,3,4,5]
const myHeores = ["Ironman","batman","superman"]
const mtArr2 = new Array(1,2,3,4)
//console.log(myHeores);


// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()         // it removes the last value in array

myArr.unshift(9)        // it add 9 in the start of the array
myArr.shift()           // to shift one space in array

//console.log(myArr.includes(9))      // it return boolean datatype false
//console.log(myArr.indexOf(1)) 

const newArr = myArr.join()     // join will binds and converts the array into type String

//console.log(myArr);
//console.log(newArr)
//console.log(typeof newArr)

//-----------splice , slice

console.log("A", myArr);            //original array

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C ",myArr)