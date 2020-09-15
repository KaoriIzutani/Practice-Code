let name = '  Kaori Izutani '

// Length property (NOT a method. Methods have the () after the dot notation).
console.log(name.length)

// Convert to upper case string method. Doesn't take an argument, the () is blank.
console.log(name.toUpperCase())

// Convert to lower case string method. 
console.log(name.toLowerCase())

 /* A useful method, called "includes". Finds if a certain word is included in a string.
 Returns a boolean, true or false. Unlike the above methods, this requires an argument 
in (). In this case, the required argument is the desired word you want to find.*/

let password = 'abc1234smoe098'
console.log(password.includes('password'))

/*Trim method. Trims out any white space on the inner and outer edges of the string.
Doesn't take an argument.*/

console.log(name.trim())

/*Challenge time. Create a function called isValidPassword. It will take a single 
argument and return 'true' if a valid p/w or 'false' if not. Criteria:
P/w length must be > 8 characters AND it doesn't contain the word "password"*/

let isValidPassword = function (createdPassword) {
    if (createdPassword.length > 8 && !createdPassword.includes('password')) {
        return true
} else {
        return false
    }
}

/*I used an if statement to solve this. But another way you can solve this and 
shorten the code is this: */

let isValidPassword = function (createdPassword) {
    return createdPassword.length > 8 && !createdPassword.includes('password')
}

console.log(isValidPassword('askepo'));
console.log(isValidPassword('abc133&!^#'));
console.log(isValidPassword('askepopassword'));
