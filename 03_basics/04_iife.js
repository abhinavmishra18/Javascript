// Immediately Invoked Function Expression (IIFE)

// Named IIFE

( function one() { // We use this IIFE Function we get problem from global scope pollution ( global scope variables )
    console.log(`DB CONNECTED`);
})();

// Unnamed IIFE 

( (name) => { // parameter
    console.log(`DB CONNECTED TWO ${name}`);
} )(`Abhinav`) // arugument

