const coding = ["js", "ruby", "java", "python", "cpp"] 
// coding.forEach(function(val , ind){
//     console.log(val , ind);
// })



// coding.forEach((item) =>{
//     console.log(item);
// })


// function printme(val , ind , arr){
//     console.log(val + " -> "  + ind  +  " -> " + arr ); 
// }

// coding.forEach(printme)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )