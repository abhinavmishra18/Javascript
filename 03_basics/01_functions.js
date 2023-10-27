// Function definition - parameters
// And when we call a function then we give the input that is called - Argument

function addTwoNumbers(number1 , number2){
    // let result =  number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username = "Abhinav"){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhinav"))
// console.log(loginUserMessage("Abhinav"))

// Situations where we don't know that how much arguments well come

function calculateCartPrice(...num1){ // Here this ... operator is a rest operator we generally use it when we get data into a cart or something because there we don't know the amaout of data which going to be added
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Abhinav",  // Object
    price: 199,
}

// Now how to use/pass this Object in function

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));