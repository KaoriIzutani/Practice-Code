//Example of undefined for variable
let name 

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name.')
} 
else {
    console.log(name)
}

//Example of undefined for function arguments
let square = function(num) {
    console.log(num)
}

//Undefined as function return default value
let result = square() //Leaving "square's" value blank returns undefined
console.log(result)

//
let age = 27

/*Null is intended for situations, such as the user wants to clear
(reset) the age they entered in the browser.*/

age = null 

console.log(age)

