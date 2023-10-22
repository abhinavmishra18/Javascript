let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // converting string to number 
console.log(typeof valueInNumber); // This will print number
console.log(valueInNumber); // This will print NaN ( Not a Number) because javascript is not strict in this case so when you will try to convert 33abc from string to number it will convert it but will not print it . It will print NaN

/* 
   --> Some Conversions 

        - "33" ==> 33
        - "33abc" ==> NaN
        - "true" ==> 1 (vice versa)
        - "false" ==> 0 (vice versa)
        - "null" ==> 0
        - "undefined" ==> NaN
        - "" - false (empty strings)
        - "Abhinav" - true (When there is a value)

*/

let isLoggedIn = 1

let booleamIsLoggedIn = Boolean(isLoggedIn)
console.log(booleamIsLoggedIn);



let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);