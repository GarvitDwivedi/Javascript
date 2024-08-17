// const arr = [1,2,3,4,5,6,7,8]

// const newarr = arr.reduce((prev , curr , ind )=>{
//     console.log(`${prev} and cuurent value is ${curr} and it ind ${ind}`);
//     return prev + curr ;
    
// } , 0);

// console.log(newarr);


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

const totalPricetoPay = shoppingCart.reduce((sum , curr)=>(sum + curr.price) , 0)

console.log(totalPricetoPay);
