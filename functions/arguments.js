/*How to add multiple arguments in a function. Define each argument in the parenthesis after
the function keyword. You can add as many arguments as you like. Keep in mind though
that long arguments make your code unwieldy.*/ 
/* let add = function (a, b, c)  {
    return a + b + c
}

let result = add(10, 1, 6)
console.log(result) */


/*Default arguments. Example used here is creating a video game scoreboard. You set the 
default value in the parenthesis after the function keyword.*/
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

 let scoreText = getScoreText(undefined, 99) /*If a value was supplied in your call, the call's 
value overrides the default value. If nothing was supplied in the call, the default values
are used. Also, if you want the first parameter to be the default, but the second one to be 
defined, you'll need to use the "undefined" keyword*/
console.log(scoreText) 

/*Challenge time: Make a tip calculator. Make a function that will calculate a restaurant
tip amount based on %)
Name your function getTip. Use the following arguments: total, tipPercent. Make the 
tipPercent default .2. Test it using various amounts for total and tipPercent. Use the 
multiplication operation with total x tipPercent*/

let getTip = function (total, tipPercent = .2) {
    return '$' + total * tipPercent
}

let tipAmount = getTip(41.38, .25)

console.log(tipAmount)

