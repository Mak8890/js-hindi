const score = 400

//console.log(score);

const balance = new Number(1000.55664)

//console.log(balance);
//console.log(balance.toString());


//console.log(balance.toFixed(2));

//console.log(balance.toPrecision(4))

//console.log(balance.toPrecision(5))

const hundreds = 1000000

//console.log(hundreds.toLocaleString());     // based on US standards  1,000,000

//console.log(hundreds.toLocaleString("en-IN"));      //based on Indian standards 10,00,000

//+++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++


//console.log(Math.abs(-4))
//console.log(Math.round(4.5))

//console.log(Math.ceil(4.2)) // 5
//console.log(Math.ceil(4.9)) // 5
//console.log(Math.floor(4.2)) // 4
//console.log(Math.floor(4.9)) // 4
//console.log(Math.max(4,2,1,9,7,3)) // 9
//console.log(Math.min(4,2,1,9,7,3)) // 1

//console.log(Math.random())      // 0.06856482352637 values always comes between 0 and 1

//console.log(Math.random()*10 + 1)
//console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)