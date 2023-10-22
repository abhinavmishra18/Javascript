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

// ************** Operations *****************

let value = 3
let negValue = -value;
console.log(negValue); // will print negative value that is -3

/* ***************Some Tricky Conversions****************** */

console.log("1" + 2); // will print 12
console.log(1 + "2"); // will also print 12
console.log("1" + 2 + 2); // will print 122 ( will convert everything in string )
console.log(1 + 2 + "2"); // will print 32 ( Because of Ecma Script Guidlines)
console.log(+true); // will print 1
console.log(+""); // will print 0
