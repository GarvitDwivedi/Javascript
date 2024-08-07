// const obj = {
//     name : "Garvit" , 
//     roolNo : 26 ,
// }

// console.log(obj);

 const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     mySym: "mykey1",     // Here it is working as a key in javascript it is not a symbol 
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(typeof JsUser.mySym);  // string 


const JsUser = {
    name: "Garvit",
    "full name": "Garvit Dwivedi",
    [mySym]: "mykey1",       // 
    age: 18,
    location: "Kanpur",
    email: "dwivedigarvit777@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.age = 144 ; // No 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.email}`);
}

JsUser.greeting()
JsUser.greetingTwo();