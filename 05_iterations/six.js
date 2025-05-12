//const coding = ["js","c#","ruby","swift","python"]

//const data = coding.forEach((item) => {         // store froEach value in variable
 //   console.log(item);
    //return item           // to return the forEach value
//})

//console.log(data)       // it gives undefined value od data variable
// Note forEach never return a value

// filter() return values
const myNum = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNum.filter((num) => num > 5)            // 1st method
//const newNums = myNum.filter((num) => {                 // 2nd method
//    return num > 5                  // if we use scope function then return keyword is must to use
//})

const newNums = []      // we decalre an empty array 
myNum.forEach((num) => {            // in this we return foreach values and store in empty arrays.
    if( num > 5){
        newNums.push(num)
    }
})


console.log(newNums)
// filter is very important and will be used in number of places.

const books = [
    {bookName : "Book 1", genre : "Fiction",publish : 1999},
    {bookName : "Book 2", genre : "Horror",publish : 2007},
    {bookName : "Book 3", genre : "History",publish : 1995},
    {bookName : "Book 4", genre : "Science",publish : 2000},
    {bookName : "Book 5", genre : "History",publish : 2005},
    {bookName : "Book 6", genre : "Science",publish : 2010},
    {bookName : "Book 7", genre : "Comedy",publish : 2011}
]

let userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
})

console.log(userBooks);
