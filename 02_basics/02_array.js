const marvel_Heores = ["Ironman","Thor","Spiderman"]
const dc_Heroes = ["Batman","Flash","Superman"]

//marvel_Heores.push(dc_Heroes)       // pushes items  in the existing Array

//console.log(marvel_Heores);
//console.log(marvel_Heores[3][1]);

const allHeroes = marvel_Heores.concat(dc_Heroes)       // it return new array after merging

//console.log(allHeroes);
//console.log(allHeroes[4]);      // mostly we don't use concat oprttor instead we use spread operaor to merge two Arrays


const all_new_Heroes = [...marvel_Heores,...dc_Heroes]      // in spread operator we can add 3rd array by using c ',' but in concat we can merge only two arrays.

//console.log(all_new_Heroes);
const arr = [1,2,3,[4,5],6,[7,8,[1,3]]]     // it has 4 depth of arrays

const real_arr = arr.flat(Infinity)
const real_arr1 = arr.flat(4)           // here 4 is no of array to used converted flat

//console.log(real_arr1)
//console.log(real_arr);


//console.log(Array.isArray("Areeb"))
//console.log(Array.from("Areeb"))        // it converts any strings,objects into Arrays

//console.log(Array.from({name:"Areeb"}))

let score1 = 200
let score2= 300
let score3 = 400

console.log(Array.of(score1,score2,score3))