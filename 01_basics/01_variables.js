let Name = "Abhinav"
const id = "123223"
var phone = "78234762547256"

/*

--> var and let creates a variable that can be further changed but value of const can't be changed
--> Now developer use let in place of var because of some factors like - 
    - Scope of variable 
    - Redeclaration and reassignment
    - Hoisting 

var -->

        Variables declared with var can have both global and local scope 
        Variables declared with var can be redeclared and reassigned 
        Variables declared with var are hoisted to the top of there global or local scope , which makes them accessible before the line they are declared 

let -->

        Variables declared with let can have global , local or block scope . A block scope is for a variables declared in a block . A block in javascript involves a opening and a closing curly braces .
        Just like var, variables declared with let can be reassigned to other values, but they cannot be redeclared
        Variables declared eith let are hoisted to there top of local , global or block scope but its hoisting is slightly different var variables are hoisted with a default value of undefined, which makes them accessible before their line of declaration (as we've seen above).
        But, let variables are hoisted without a default initialization. So when you try to access such variables, instead of getting undefined, or variable is not defined error, you get cannot access variable before initialization. 

The main reason why let is used over var is that when we write long codes then with let we can't redeclare a variable and also we can define a block scope so because of that chance of error becomes less


    Block Scope: When you declare a variable using let inside a block (e.g., a loop or an if statement), the variable is only accessible within that block. 
    This allows for better control and isolation of variables, 
    reducing the risk of unintended side effects and making your code more predictable.

    Temporal Dead Zone: With let, variables are not accessible before their declaration within the block. 
    This is called the Temporal Dead Zone (TDZ), and it helps catch potential issues at runtime. With var, variables are "hoisted" to the top of their containing function or global scope, 
    potentially leading to unexpected behavior.
*/