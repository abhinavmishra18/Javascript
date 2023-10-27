// There are two ways to declare an object - Literals & Constructor

// object literals -- Declare

const JsUser = {
    name: "Abhinav",
    age: "21",
    location: "Lucknow",
    email: "abhinav.2725@gmail.com",
    isLoggedIn: false,
}

// How to Access Objects

console.log(JsUser.email)

   // Or

console.log(JsUser["email"]) // More Preffered

// const tinderUser = new Object() --> singleton
// const tinderUser = {} --> non singleton object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign(obj1,obj2) // assign operator 

           // or

const obj4 = {...obj1, ...obj2} // spread operator

console.log(obj3);

// When we'll get values from the database

const users = [ // In future we'll see this like in array there are many objects
    {
        id: 1,
        email: "Abhinav@gmail.com",
    }, //Like this we'll get many values

]

users[1].email
console.log(JsUser)

console.log(Object.keys(JsUser)); // By this we can get keys
console.log(Object.values(JsUser)); // By this we can get values
console.log(Object.entries(JsUser));

//console.log(JsUser.hasOwnProperty('isLoggedIn'));
  
// Destructure

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Abhinav"
}

// course.courseInstructor

        // Or

const {courseInstructor} = course
console.log(courseInstructor); // By this way we can destructor an object

