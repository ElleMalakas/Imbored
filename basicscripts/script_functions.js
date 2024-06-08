console.log(' ───♡─── All About Functions ───♡─── ');
//functions are REUSABLE BLOCKS OF CODE that performs a specific task
function greet1() {
    console.log('function decleration: Hello, world!')
}
const greet2 = function() {
    console.log('function expression: Hello, world!')
}
const greet3 = () => {
    console.log('arrow function: Hello, world!')
}
function greet4(name) { //what you see inside the paranthesis '(name)' is what we call parameters
    console.log('Hello ' + name + "!")
}
greet4('Alice'); //arguments
function add(a, b) {
    return a + b; //after using the return statement, it makes the function stop executing
}
let sum1 = add(5, 3)
console.log(sum1)
console.log(add(5, 3)); //you can also do this
//exercise 4
function sayHello() {
    console.log('Hello, Javascript!') //this wouldn't print in the terminal/cmd unless you call the function to perform it.
}
sayHello(); //this makes it print now
//exercise 4.2
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5))
//exercise 4.3
const subtract = (a, b) => {
    return a - b
}
console.log(subtract(10, 3))
//exercise 4.4
const divide = function(a, b) {
    return a / b;
}
console.log(divide(20, 4))