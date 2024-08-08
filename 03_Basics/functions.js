function test(){
    console.log("Hello World");
}
test() ;

function  add(a , b){
    console.log(a+b);
}
add(4 ,5);


function setuserName(name = "Unknown"){
    if(!name){
        console.log("Please enter a valid user name");
        return ;
    }
    console.log(`${name} logedin Successfully`);
    
}

setuserName("GG")

function calculateCartPrice(num1 , nums2 , ...val1){
    return val1 ;
}

console.log(calculateCartPrice(100 , 200, 300 ,400, 500));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)
// // handleObject(user)
handleObject({
    username: "sam",
    prices: 399
})


