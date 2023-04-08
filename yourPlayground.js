// console.log('Hello World');
// console.log('Kiran dev K');

// myname = 'Kiran dev K'
// console.log(myname)

// sentence = 'All the best'
// console.log(sentence);

// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt('tip %?')) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount

// // Usually input is of the FORM not PROMPT

// console.log('Total: ' + total)
// // var fruit = prompt("Whats your fav fruit?");
// // console.log(fruit)

// FLOOR
// CIEL
// RANDOM ANY NUMBER BETWEEN O AND 1


// console.log(Math.floor(Math.random()*3));

// let weather;
// weather = prompt('What is the weather outside');
// if (weather=='rain') {
//     console.log('Grab your umbrella');
// } else {
//     console.log('Wear your sunglasses');
// }

function sayMyName() {
    console.log('Kiran')
}

function sayMyName(name) {
    console.log(name);
}

// sayMyName('Qazi')
// sayMyName('Kiran')

function greeting(name) {
    // console.log('hi ' + name + ' nice to meet you');
    greet = `hi ${name}, Nice to meet you.`
    console.log(greet);
}

// greeting('kiran')


//ARROW Functions - ES6

const sumArrow = (a,b) => {
    return a + b
}

//implicit written

// let sum = (a, b) => a + b

//Arrays
const arrays = ['kiran', 'dev']

// console.log(arrays);
// console.log(arrays[0]);

arrays.push('K')

// console.log(arrays);

//Array slice

// console.log(arrays.slice(0, 1))
// //inclusive of 0 and exclusive of 1

// // indexOf, length

// console.log(arrays.length)
// console.log(arrays.indexOf('kiran'))

//OBJECTS

const person = {
    name: 'Leonardo',
    shirt: 'White',
    assets: 100000,
    liabilites: 30000,
    netWorth: function () {
        return this.assets - this. liabilites
    }
}

const person2 = {
    name: 'qazi',
    shirt: 'black'
}
// console.log(person.name);
// console.log(person['shirt']) // Different way to access

// person.phone = "153559653"

// console.log(person);

const introducer = (name, shirt) => {
    console.log(`My name is ${name} and I am wearing a ${shirt} shirt`);
}

// introducer(person.name, person.shirt)
// introducer(person2.name, person2.shirt)

// console.log(person.netWorth())

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// for (const fruit of fruits) {
//     console.log(fruit);
// }

const numbers = [1, 2, 3, 4, 5, 6]
let result = []

for (const number of numbers) {
    result.push(number*2)
}

// console.log(result);
// //sum
 
const letterCounter = () => {
    let counter = 0
    const phrase = 'hey Kiran'
    // console.log(phrase.length)
    for (letter in phrase) {
        counter += 1
    }
    return { counter }
}

// console.log(letterCounter());

const max = (numbers) => {
    let result = numbers[0]
    for (const number of numbers) {
        if (number>result) {
            result = number
        }
    }
    return { result }
}

// console.log(max([2,3,4,1,2]))

const frequency = (phrase) => {
    const result = {}
    for (const letter of phrase) {
        if (letter in result) {
            result[letter] += 1
        }
        else {
            result[letter] = 1
        }
    }
    return result
}

// console.log(frequency('lol, what are you doing?'));

const wordFrequency = (phrase) => {
    let frequency = {}
    for (const word of phrase.split(' ')) {
        if (word in frequency) {
            frequency[word]++
        }
        else {
            frequency[word] = 1
        }
    }
    return frequency
}

// console.log(wordFrequency('lol what lol'));

//higher order functions
//map - will return the exact array
//filter - will return the array with matching conditions
//reduce

// [1, 2, 3, 4].map(number => console.log(number))

// let result2 = [1,2,3,4].map(number => number * 2)
// console.log(result2)

// const nums1 = [1, 2, 3, 4, 5, 6]

// console.log(nums1.filter(num => num > 3));

// const actors = [
//     { name: 'johnny', netWorth: 2000000 },
//     { name: 'amber', netWorth: 10 },
//     {name:'leonardo', netWorth: 10000000}
// ]

// console.log(actors.filter(actor => actor.netWorth>10))

// let results = actors.filter(actor => actor.netWorth > 10)

// let names = result.map(actor => actor.name).join(', ')

//reduce - amazing use case for summing

// const numberss = [1, 2, 3]

// const result2 = numberss.reduce((prev, curr) => prev + curr)

// const result3 = numberss.reduce(sumArrow)

// console.log(result2)
// console.log(result3)

