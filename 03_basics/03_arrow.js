const user = {
    username: "Abhinav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this keyword --> Refers current context
    }
}

user.welcomeMessage()
user.username = "Virat"
user.welcomeMessage()

// console.log(this);

const chai = function () {  // normal function
    let username = "Abhinav"
    console.log(this.username);
}

const chai2 = () => {   // Arrow function
    let username = "Abhinav Mishra"
    console.log(this.username);
}

// Basic Arrow function

const addtwo = (num1 , num2) => {
    return num1 + num2
}

// Implicit return

const addTwoNum = (num1 , num2) => num1 + num2

