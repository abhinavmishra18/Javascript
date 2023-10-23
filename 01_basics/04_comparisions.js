console.log("2" > 1); // will print true ( Here JavaScript has already converted "2" String to a Number)
console.log("02" > 1); // will print true 

console.log( null > 0); //false
console.log( null == 0); //false
console.log( null >= 0); //True

console.log(undefined == 0); // false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === --> This is strict check it not only checks the value but also the datatype
// == --> This is a conversion
