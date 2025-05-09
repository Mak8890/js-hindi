// singleton object or constructor method
const tinderUser = new Object()
tinderUser.id = 123
tinderUser.name = "finch"
tinderUser.isLoggedIn = false
console.log(tinderUser)


//combine or merge two objects

const obj1 = {1 : "areeb",2 : "khan"}
const obj2 = {3 : "Software",4 : "Engineer"}
const obj4 = {5 : "Aligarh", 6 : "India"}

// this is less used method for merging two or more objects
//const obj3 = Object.assign(obj1,obj2)
//Object.assign(target,source) as ({},obj1,obj2)   here {} acts as target and rest will act as source1,source2,etc
//const obj3 = Object.assign({},obj1,obj2)      // both have same result {} is an optional parameter
//const obj3 = Object.assign({},obj1,obj2,obj4) //its always a good practice to use {} as target 

//most widely used method to merge multiple objects is by spread operator
const obj3 = {...obj1, ...obj2, ...obj4}

//console.log(obj3);

// if you get values from database then it comes as an array of objects

const users = [
    {
        id : 1,
        name : "areeb",
        email : "areeb@gmail.com"
    },
     {
        id : 2,
        name : "arsalan",
        email : "arsalan@gmail.com"
    },
     {
        id : 3,
        name : "anas",
        email : "anas@gmail.com"
    },
     {
        id : 4,
        name : "sam",
        email : "sam@gmail.com"
    }
]

console.log(users[0].name,users[0].email);

console.log(Object.keys(tinderUser));       // it gives all the keys of the object as an array of strings
console.log(Object.values(tinderUser));      // it gives all the values of the object as an array of strings
console.log(Object.entries(tinderUser));    // we get array inside an array
//we can use this array of keys or values and use with loop on keys/values and used in many places in the application
// we use it mostly, when we are working with database data

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // it checks the existence of the object data
