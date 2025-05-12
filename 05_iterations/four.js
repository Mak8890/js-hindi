const  myObjects = {
    js : "Javascript",
    cs : "C#",
    rb : "Ruby",
    swift : "Swift By Apple"
}

// forin loop is used in objects
//for(const key in myObjects){
    //console.log(myObjects[key]);    
    //console.log(`${key} shortcut is for ${myObjects[key]}`);    
//}

const programming = ["js","rb","cs","swift"]

for(const key in programming){
    //console.log(key)      // it gives key indexes 0,1,2,3
    console.log(`Languages are ${programming[key]}`)
}



