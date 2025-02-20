// Primitive

// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail; //undefined

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

// const bigNumber = 3445677899277n



// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["saktiman", "naagraj", "doga"]
let myObj = {
    name: "Tanu",
    age: 20,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber) // determines the datatype of 