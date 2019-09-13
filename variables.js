/* Variable rules: 1)  Can't define a var more than once. The workaround to reassign a var value is in the 
below example.*/

let petName = 'Aslan'
petName = 'Toki'

console.log(petName)
// 2) There are rules regarding var name. Example: 
let test = 2
let result = 3 + 4 
/*Confusing because JS doesn't know if you want the 3 as a var (which = 2) or you want to add 3 + 4
together. One of the rules is the var must start with a letter, underscore, or $. Other than $, all 
other symbols, such as ! are not acceptable to use in var names.*/ 

// 3) Var cannot be reserved keywords, such as var, let etc

