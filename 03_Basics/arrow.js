// const user = {
//     username : "Garvit" , 
//     price : 90 ,

//     helper : function(){
//         console.log(`${this.username} and the price is ${this.price}`);
//     }
// }


// user.helper() ;
// user.username = "Mahadev" ;
// console.log(this);  //


function helper(){
    const username = "GGGG"
    console.log(this);
}
// helper() ;s



const helper1 = function(){
    const username = "GGG"
    console.log(this);
}

// helper1() ;

// const helper2 = () =>{
//     const username = "Garv"
//     console.log(this);
// }

// helper2() ;



const add = (num1 , num2) => {
    return num1 + num2 ;
}


console.log(add(5 ,6));


const ad = (num1 , num2) => num1 + num2

console.log(ad(3,4));

const newadd = (num1  ,num2) => (num1  - num2)

const addTwo = () => ({username: "hitesh"})


console.log(addTwo())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()