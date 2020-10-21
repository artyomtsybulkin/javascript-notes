console.log('Hello World!')

// var, let, const
let age = 30
const year = 2000
const name = 'John'
const isCool = true
const rating = 4.5
const x = null
const y = undefined
let z

// Data types
console.log(typeof rating)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

// Strings
console.log('My name is ' + name + ' and my age is ' + age)
// ES6+ Templates
console.log(`My name is ${name} and my age is ${age}`)

const s = 'Hello World!'
console.log(s.length)
console.log(s.substring(0, 5))
console.log(s.split(''))

const s1 = 'technology, computers, it, code'
console.log(s1.split(', '))

// Arrays
const numbers = new Array([1,2,3,4,5])
console.log(numbers)
const fruits = ['apples', 'oranges', 'pears', 10, true]
fruits[5] = 'grapes'
fruits.push('mangos')
fruits.unshift('strawberries')
console.log(fruits)

// Objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'john@email.com'

console.log(person.firstName, person.lastName)
// Creating variable using object - Destruction
const { firstName, lastName, address: { city } } = person
console.log(city)

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

// Loops

for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

let i = 0
while(i < 10) {
    console.log(`While Loop Numbers: ${i}`)
    i++
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text)
}

for(let todo of todos) {
    console.log(todo.text)
}

todos.forEach(function(todo) {
    console.log(todo.text)
})

const todoText1 = todos.map(function(todo) {
    return todo.text
})
console.log(todoText1)

const todoText2 = todos.filter(function(todo) {
    return todo.isCompleted === true
})
console.log(todoText2)

const todoText3 = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text
})
console.log(todoText3)

// Conditionals
const x1 = 10
if(x1 == 10) {
    console.log('x1 is 10')
}

const x2 = '10'
if(x2 === 10) {
    console.log('x2 is 10')
}

const x3 = 4
if (x3 === 10) {
    console.log('x3 is 10')
} else if(x3 > 10) {
    console.log('x3 is greater than 10')
} else {
    console.log('x3 is less than 10')
}

const y3 = 10
if(x3 > 5 || y3 > 10) {
    console.log('x3 is more than 5 or y3 is more than 10')
}

// Ternary operator
const x4 = 10
const color = x4 > 10 ? 'red' : 'blue'
// ? - then
// : - else
console.log(color)

// Switches
switch(color) {
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is NOT red or blue')
        break        
}

// Functions
function addNumbers(num1 = 1, num2 = 1) {
    console.log(num1 + num2)
}
addNumbers()
addNumbers(5,5)

const addNumbers1 = (num1 = 1, num2 = 1) => num1 + num2

console.log(addNumbers1(3,3))

// Object Oriented programming

// Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    // Method
    this.getBirthYear = function() {
        return this.dob.getFullYear()
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '3-6-1970')

console.log(person2)
console.log(person1.getBirthYear())

// Prototypes
// Prototypes allow to achieve same tasks another way
// Constructor
function Human(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

// Method determining outside of Constructor
Human.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

// Instantiate object
const human1 = new Human('John', 'Doe', '4-3-1980')
const human2 = new Human('Mary', 'Smith', '3-6-1970')

console.log(human2)
console.log(human1.getBirthYear())

// Next we will try ES6 Classes

// Class
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }
}

const person3 = new PersonClass('John', 'Doe', '4-3-1980')
const person4 = new PersonClass('Mary', 'Smith', '3-6-1970')

console.log(person4)
console.log(person3.getBirthYear())

// Next we will discuss DOM
// Currently recomended selectors
console.log('By tag', document.querySelector('ul'))
console.log('By Id', document.querySelector('#id-list'))
console.log('By Class', document.querySelector('.class-list'))
console.log(document.querySelectorAll('li'))
