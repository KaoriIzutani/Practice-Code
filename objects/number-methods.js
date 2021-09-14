//To comment out multiple lines of code: Highlight multiple lines you want to comment out, then Ctrl-/ 

let num= 103.941
// console.log(num.toFixed(10))
// console.log(Math.round(num)) //This number method rounds up
// console.log(Math.floor(num)) //This method rounds down a number
// console.log(Math.ceil(num)) 
/* Short for "ceiling". This forces the number to round up, even if the number normally rounds down, like 1.1*/

// let min = 0
// let max = 4
// let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
// /*No argument in the parenthesis is required for Math.random method. The above formula is something 
// we will be using a lot*/
// console.log(randomNum)

/*Create a guessing game, where the person guesses a number between 1-5. If user guesses correctly, it returns true. If noi.
return false.*/

//Step 1. You need to define the user's guess by creating a function. Here, we created the function with the argument "guess".
let makeGuess = function (guess){
    let min = 1
    let max = 5
    let correctGuess =  Math.floor(Math.random() * (max-min + 1)) + min

    return guess === correctGuess
}


console.log(makeGuess(2))

