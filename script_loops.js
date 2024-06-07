console.log(' ───♡─── All About Conditionals ───♡─── ')
//conditionals is all about to make an action based on different conditions, in other words it makes different responses to a problem or a condition
let age = 18
if (age = 18) { //if is used if specified condition is true, u get that
    console.log('you are legal')
} else if (age < 18) { //else if is used for a new condition to test if the first condition is false
    console.log("you are a minor, FBI!")
} else { //else is used if the conditions given are false
    console.log('you are an adult, get yo ass working!')
}
let color = 'purple'
switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    case 'purple':
        console.log('color is purple')
        break;
    default:
        console.log('color is neither red, blue, and purple')
}
//exercise 2
let score = 85
if (score >= 90) {
    console.log('A grade')
} else {
    console.log('B grade')
}
//exercise 2.2
let temperature = 30
if (temperature > 35) {
    console.log('Too Hot!')
} else if (temperature >= 25 && temperature <=35) {
    console.log('Perfect weather!')
} else {
    console.log('Too Cold!')
}
//exercise 2.3
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Start of the work week')
        break;
    case 'Wednesday':
        console.log('Midweek')
        break;
    case 'Friday':
        console.log('End of the work week')
        break;
    default:
        console.log('Just another day')
        break;
}
console.log(' ───♡─── All About Loops ───♡─── '); //loops are used to repeatedly run a block of code as long as a specified condition is true
let i = 0;
// for (i ; i < 5; i++) {
//     console.log('Iteration', i); //iteration means is a repetition of a process
// }
// while (i < 5){
//     console.log('wait until number', i);
//     i++
// }
do {
    console.log('Iteration again', i)
    i++
} while (i < 5); //most of them are basically does the same thing <3
//exercise 3
let ab = 1
for (ab ; ab <= 10; ab++ ) {
    console.log('EXERCISE 3', ab)
}
//exercise 3.2
let ba = 2
while (ba <= 10) {
    console.log('EXERCISE 3.2', ba)
    ba += 2; //allows the program to add by twos (2,4,6, and so on..)
}
//exercise 3.3
let abc = 10
do {
    console.log('EXERCISE 3.3', abc)
    abc--
} while (abc >= 1);

