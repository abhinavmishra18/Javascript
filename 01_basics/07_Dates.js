let myDate = new Date()
console.log(myDate); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // will print object

//let myCreatedDate = new Date(2023 , 0 , 23)
let myCreatedDate = new Date(2023, 0 , 23 , 5, 3)
console.log(myCreatedDate.toLocaleString());

// Refer to MDN 

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
