let fahrenheit = 40
 /*Expected output: 0c and 273.15k. Don't worry about rounding decimal places. 
Adjust this value, so the Celsius and Kelvin values adjust accordingly.*/


//Calculate Celsius value and store in Celsius var. 
let celsius = (fahrenheit - 32) * 5/9
console.log(celsius)


//Calculate Kelvin value and store in var. 
let kelvin = (fahrenheit + 459.67) * 5/9
console.log(kelvin)