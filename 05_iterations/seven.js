const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// add 10 to each items in array

//const newNums = myNumbers.map((num) => num + 10)        // MAP FUNCTIONS RETURN AUTOMATICALLY AND STORES IN newNums

//const newNums = myNumbers.map().map()       // this called chaining- we use multiple functions one after the other

// this chaining example
const newNums = myNumbers
            .map((num) => num * 10)     // 1st map pass the new array[10,20,30,...] to 2nd map()
            .map((num) => num + 1)      // so this num be get array[10,20,30,..] but not [1,2,3,4,...]
            .filter((num) => num < 60)      // it return [11,21,31,41,51]

console.log(newNums);       // output is 11,21,31,41,51,61,71,81,91,101


