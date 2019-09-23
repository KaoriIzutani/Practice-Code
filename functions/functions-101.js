/* There are 3 parts to a function: input (aka an argument), code (what are we trying to do: 
   fetch a user, convert a number, print a message?), and output (aka the return value)*/

 /* let greetUser = function () {
     console.log('Welcome user!')
 } */

 /* greetUser() //It's not enough to use the function statement. You have to call it using this 
 syntax. You can call the created function as many times as you like. This is helpful, when 
 you have large sets of data and you cut down on the code's length, thanks to the function.*/
 /* greetUser()
 greetUser()

 let square = function(num) {
    let result = num * num
    return result 
 }  */
 /*Name your argument in the parenthesis after the function keyword (in this case, the argument 
   is named "num")*/
 /* let value = square(3) //In order for both console.logs to print, you have to create a var to 
 store the value of "square" (in this case, 3 for "value", 10 for "otherValue". If you don't, 
 you get a "value is not defined" error message in the terminal.*/
 /* let otherValue = square(10)
 console.log(value)
 console.log(otherValue)  */

 /*Challenge time! Create a function called "convertFahrenheittoCelsius". Make sure to call
  your function a couple of times to make sure the function is working correctly. Sample 
  Celsius values that should print: (32°F = 0°C) (68°F = 20°C)*/

  let convertFahrenheittoCelsius = function (temp) {
     let celsius2 = (temp - 32) * 5/9
     return celsius2
  } 
  
  let enteredTemp = convertFahrenheittoCelsius(32)
  let enteredTemp2 = convertFahrenheittoCelsius(68)

  console.log(enteredTemp)
  console.log(enteredTemp2)