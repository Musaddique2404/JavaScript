// Reduce

const myNums = [1,2,3]
const myTotal = myNums.reduce(function (accumulator,currentValue) {
    console.log(`accumulator : ${accumulator}, current value : ${currentValue}`);    
    return accumulator + currentValue
},0)
console.log(myTotal);

// Arrow Function
const myNums1 = [1,2,3]
const myTotal1 = myNums1.reduce((accumulator,currentValue) => accumulator + currentValue,0)
console.log(myTotal1);

// Example 3

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);
