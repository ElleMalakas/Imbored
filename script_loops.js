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
console.log(' ───♡─── All About Loops ───♡─── ')
