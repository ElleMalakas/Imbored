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
