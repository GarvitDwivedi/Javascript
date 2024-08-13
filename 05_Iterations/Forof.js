// {} [] () 


let nums = [1,2,3,4,5]

// for(const item of nums){
//     console.log(item);  
// }


// const name = "Garvit Dwivedi" 
// for(const item of name){
//     console.log(item);
// }

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for(const [key  ,val] of map){
    console.log(`${key} and its value is ${val}`);
}




const obj = {
    Name : "GG" ,
    age : 15 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

