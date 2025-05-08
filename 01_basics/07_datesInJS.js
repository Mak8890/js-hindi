// dates

let myDate = new Date()

//console.log(myDate.toString())      //---Thu May 08 2025 06:42:43 GMT+0000
//console.log(myDate.toDateString())  //---Thu Mat 08 2025
//console.log(myDate.toISOString())   //---2025-05-08T06:44:15 GMT+0000
//console.log(myDate.toLocaleString())    //---5/8/2025, 6:44:15 AM

//console.log(typeof myDate)      // Date is Object type.. Interview question what is the type of Date
//let createdDate = new Date(2023,0,23)
//console.log(createdDate.toDateString());
let myd = new Date("01-14-2025")
let createdDate = new Date(2023,0,23,5,3)

//console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);  //14254264515 mili seconds approx.
//console.log(createdDate.getTime())      // we always compare dates in milli seconds


//console.log(Math.floor(Date.now()/1000))        // for coverting milliseconds to seconds