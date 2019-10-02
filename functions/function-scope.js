//Inside global scope (convertFaahrenheittoCelsius, enteredTemp, enteredTemp2)
    /*Inside local scope (fahrenheit [even if it's not in the curly braces], celsius2)
    Anytime you create a function, you're creating a local scope*/
        //Second local scope (isFreezing)

let convertFahrenheittoCelsius = function (fahrenheit) {
    let celsius2 = (fahrenheit - 32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius2
 } 
 
 /*You can't access the local scopes, fahrenheit and celsius2 here, because it's outside of the 
 function*/
 let enteredTemp = convertFahrenheittoCelsius(32)
 let enteredTemp2 = convertFahrenheittoCelsius(61)

 console.log(enteredTemp)
 enteredTemp2 = enteredTemp2.toFixed(1) /*toFixed method rounds up or rounds down 
 the numbers conversion*/
 console.log(enteredTemp2)