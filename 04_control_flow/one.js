//   if
const temperature = 41;

if(temperature < 50)
{
    //console.log("Tes! temperature is below 50");    
}

const userLoggedIn = true
const debitCard = true
const loggegInFromGoogle = false
const loggegInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy course.");    
}
if(loggegInFromGoogle || loggegInFromEmail){
    console.log("Allowed to access");
    
}