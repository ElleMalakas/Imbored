console.log(' ───♡─── All About Objects ───♡─── ')
//objects are COLLECTIONS of KEY-VALUE Pairs, Each key-value pair is called a PROPERTY (Objects are {}) (Arrays are [])
let person = {
    name: 'Cookie',
    age: 2,
    isStudent: false
}
console.log(person.name)
console.log(person['name'])
// console.log(person.age)
// console.log(person['age']) : same goes with isStudent key
person.city = 'USA';
person.age = 3 //you can modify it like thesee.........
console.log(person.city)
console.log(person.age)
delete person.city;
console.log(person.city) 
//exercise 5
let car = {
    make: 'MISH',
    model: 'HV2',
    year: 1988
}
console.log(car.make, car.model, car.year)
car.make = 'VEN'
car.year = 1999
console.log(car.make, car.model, car.year)
console.log(' ───♡─── All About Arrays ───♡─── ')
//Arrays are used to STORE MULTIPLE VALUES in a SINGLE VARIABLE
let fruits = ['Apple', 'Mango', 'Banana', 'Cherry']
console.log(fruits[1]); //MANGO - index numbers always starts with
fruits[1] = 'Pomelo'
console.log(fruits[1])
console.log(fruits)
//More array methods include...
fruits.push('Watermelon') //adds in the last
fruits.pop() //removes the last
fruits.unshift('Coco') //adds in the beginning
fruits.shift() //removes the first
console.log(fruits.length)
//exercise 6
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers[1] = 99
console.log(numbers[2], numbers)
numbers.push(3)
numbers.pop()
numbers.unshift(33)
numbers.shift()
console.log(numbers)
