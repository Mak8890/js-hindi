const name = "areeb"
const location = "Dubai"

//console.log(name + location);



console.log(`I am ${name} and I live in ${location}`)

const gameName = new String("Call of Duty")

console.log(gameName.toUpperCase());

console.log(gameName.charAt(6))

console.log(gameName.indexOf("u"))

console.log(gameName.substring(0,7))

const newString = "    Areeb.    "

console.log(newString.trim());

console.log(newString.trimStart());

console.log(newString.trimEnd())

const url = "https://areeb.com/areeb%20khan"

console.log(url.replace("%20","-"));

console.log(url.includes("khan"))


const newName = "Mohammad Areeb Khan"
const word = newName.split(" ");

console.log(`First name is ${word[0]}, Middle name is ${word[1]} and Last name is ${word[2]}`);

console.log(word,2)
