/*Lexical or static scope means that a var that you defined in one place may not be accessible 
everywhere else in your program.*/
/*Global scope (GS) means a var was defined outside of all code blocks (the if statement is an example of a 
code block). The variable (varOne) is otherwise known as a global var. GS will always exist, even in
simple programs, like "hello-world.js".*/
 /*Local scope means something was defined inside of a code block. The variable (varTwo) is otherwise known
 as a local var*/
/*In a scope, you can access var defined in that scope or in any parent/ancestor scope.*/

/*Scope hierarchy tree:
Global Scope(varOne) - has no parents or ancestors
    Local Scope(varTwo) - has a parent scope. In this case, varOne is the parent scope
        Local Scope(varFour) - since it's nested in varTwo, this scope will have access to varOne, varTwo
        and varFour.
    Local Scope(varThree) - This var is a sibling (not a child) of varTwo. Also has a parent scope of varOne.
    Here, you will only be able to access varOne and varThree, not varTwo.*/

let varOne = 'varOne'

if(true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true) { //using a nested if statement. Nested in local scope of varTwo.
        let varFour = 'varFour'
    }
}

if(true) {
    let varThree = 'varThree'
}

console.log(varTwo)