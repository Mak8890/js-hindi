// Array.reduce()

const myNums = [1,2,3,4]

//const myTotal = myNums.reduce((acc,curval) =>{
//        console.log(`acc: ${acc} and curval: ${curval}`)
//        return acc + curval
//},0)

// 2nd method 
// acc = accumulator
//curval = current value
//reduce function takes acc and curval and initial value should be paased as 0 
const myTotal = myNums.reduce((acc,curval) => acc + curval,0)


console.log(myTotal);
//example of reduce in real world

const shoppingCart = [
    {
        itemName : "Asp.net Core course",
        price : 12999
    },
    {
        itemName : "Front-end course",
        price : 7999
    },
    {
        itemName : "Javascript course",
        price : 4999
    },
    {
        itemName : "HTML course",
        price : 1599
    },
]

// we have to get the total pricr of all the courses;

const PriceTopPay = shoppingCart.reduce((acc,item) => (acc + item.price),0)

console.log(PriceTopPay);
