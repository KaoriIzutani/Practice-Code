let temp = 55

/*And operator is indicated with "&&" (Shift +7). Result checks if either side of "&&" is true or false
(bool type statement). Code will only run if both statements are true.*/

/* if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice outside')
}

/*Or operator is indicated with "||" (Shift + \, the key above Enter key). Result checks if either side of 
"||" is true or false. Code will run if either statement is true.*/

/* if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
}
//The operators can be combined with "if", "else if" and "else" statements

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside')
}
else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
}
else {
    console.log('Eh. Do what you want')
}  */

/*Real life challenge. Create a restaurant reservation system that checks if the guest vegan or not.*/

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
}
else {
    console.log('Offer up anything on the menu.')
}