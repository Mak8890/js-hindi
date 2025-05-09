// De-structure object values/data

const course = {
    coursename : "JS in hindi",
    price : "999",
    courseinstructor : "hitesh"
}

//console.log(course.courseinstructor)

const {courseinstructor} = course

console.log(courseinstructor);

const {courseinstructor : instructor} = course      // it de structure the courseinstrctor to insptructor 

console.log(instructor);        // result will be same in both ways

const navbar = ({company}) =>{           // this is react syntax {company} will de structure 

}
navbar(company = "skyetch")

// JSON API

//{
 //   "name" : "hitesh",
 //   "coursename" : "JS in hindi",
 //   "price" : "free"
//}
[               // json also in array and objects inside array
    {},
    {},
    {}
]