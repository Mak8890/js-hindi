//foreach

const coding = ["js","c#","ruby","swift","python"]

//array.forEach(element => {
////    console.log(element)
//});

//coding.forEach(element => {
   // console.log(element)
//});

//coding.forEach(function (item){
   // console.log(item)
//})

coding.forEach( (item) =>{
      //console.log(item)
})
// these are the different types of forEach representation

coding.forEach((item,index,arr)=> {
    //console.log(item,index,arr);    
})

// when array has multiple objects in it than we access array elements as:

const myCoding = [
    {
        languageName : "Javascript",
        fileName : "js"
    },
    {
        languageName : "C#",
        fileName : "cs"
    },
    {
        languageName : "Python",
        fileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})
