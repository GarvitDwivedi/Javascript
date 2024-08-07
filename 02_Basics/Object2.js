// // const obj = {} ;
// // obj.name = "Garvit" ;
// // obj.class = "B-tech" ;
// // obj.age = 19 ;

// // console.log(obj);


// // const obj1 = {
// //     email : "dwivedigarvit777@gmail.cmo",
// //     fullname  : {
// //         userName : {
// //             name : "Garvit",
// //             MobNumber : "9455689773"

// //             }
// //     }
// // }

// // console.log(obj1.fullname.userName.name);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}

// console.log(obj3);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 console.log(tinderUser);


 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {price: p} = course

// console.log(courseInstructor);
console.log(p);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }