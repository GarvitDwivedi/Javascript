// Primitive and Non Primaitive data types 

// Primitive Data Types 
/*

1-Number 
2-Boolean 
3-String 
4-BigINT
5-Null 
6-Undefined 
7-Symbol 
*/
const a = 50 ;

const islogedIn = false;

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Non Primitive Data types 

// Array , Objects , Functions 


const arr = [1 ,5 ,3, 3, 6 ,5]
console.log(arr);


const obj1 = {
    name : "Garvit" ,
    age : 19 ,
}

console.log(obj1.name);
console.log(obj1.age);

const myfunction = function(){
    console.log("Hello World");
}
myfunction() ;






