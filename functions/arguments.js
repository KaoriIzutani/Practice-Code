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
     return `Name: ${name} - Score: ${score}` /*same result as below, but using template
     string instead of concatenated string*/
    //return 'Name: ' + name + ' - Score: ' + score
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

/* let getTip = function (total, tipPercent = .2) {
    return '$' + total * tipPercent
}

let tipAmount = getTip(41.38, .25)

console.log(tipAmount)*/

/* let name = 'Vikram'
let age = 12
console.log(`I am ${age} yrs old. Hey, my name is ${name}!`) */ /*How to create a template 
string. Use the backtick key (key to the left of the number 1 key). After creating the 
variable above your template string, you use this syntax ${} for injecting some kind of value.
In this example, you put the "name" var inside ${}.
 So what's the advantage of template strings? The biggest advantage is that template strings 
 tend to be much easier to read than concatenated strings. Also, it's harder to move around
 concatenated strings vs template strings. With concatenation, if you want to change the 
 order of your string, you have to move around the + signs and remove/add the spaces. With
 template strings, you just have to cut/paste around the sentences. Much less hassle.*/

 /*Challenge time: Create a template string on the getTip function you created earlier. 
 Something like "A 25% tip on $40 would be $10". Hint: when updating your function,
 make sure to initialize your var inside the function. Go back to the function 
 scope lesson if you need a refresher. Otherwise, you will keep getting undefined in
 your template strings.*/
 
 let getTip = function (total, tipPercent =.2) {
   let tipConverter = tipPercent * 100 /*This converts your percentage from a decimal 
    point into a hard number, i.e. .2 becomes 20. Because you want your string to
    show percentage, not the decimal amount.*/
    let tipAmount2 = total * tipPercent
     return `A ${tipConverter}% tip on $${total} would be $${tipAmount2}.` /*Enter the dollar 
     sign twice on ${}if you want the dollar sign to show up in your template string.
    //Alt solution is to do this:
    return `${tipPercent * 100}% on $${total} would be $${total * tipPercent}.`*/
}

let tipAmount = getTip(60) /*Remember, if you put a default value in your function, you can
leave out the second argument's amount*/

console.log(tipAmount)
