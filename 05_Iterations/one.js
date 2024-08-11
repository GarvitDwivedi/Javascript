for(let i = 0 ; i < 5 ; i++){
    console.log(i);
}


// *
// **
// ***
// ****
// *****

for(let i = 1 ; i <= 5 ; i++){
    let str = "* ";
    console.log(str.repeat(i));   
}


let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
