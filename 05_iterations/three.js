// Array based loops

const arr = [1,2,3,4,5]

for (const num of arr) {             //forof loop
    //console.log(num);
    
}

const  greetings = "Hello World!"

for(const greet of greetings)
{
    if(greet == " "){
        //break;
    }
   // console.log(greet)
}


//Maps

const map = new Map();
map.set('IN','India')
map.set('AUS',"Australia")
map.set("USA","United States of America")
//console.log(map)

//forof loop in map

for(const [key,value] of map){
    console.log(key, ':' ,value )
}
//maps are iteratable but objects are not iteratable
//there are other ways to iterate objects

const games = {
    "game1" : "NFS",
    "game2" : "GTA V"
}
for(const [key,value] of games){
    console.log(key, ":", value)        // error object/games is not iterable
}