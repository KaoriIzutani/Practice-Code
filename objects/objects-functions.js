/* let myBook = {
    title: 'Cracking the Coding Interview', 
    author: 'Gayle Laakman McDowell',
    pageCount: 326
}

let otherBook = {
    title: 'Lord of the Rings', 
    author: 'J.R.R Tolkien',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary:`${book.title} is ${book.pageCount} pages long.`
    }
   
} */

/*Without the above function, you'd have to do a bunch of console.logs to print multiple
objects (books in this case). The above function allows multiple return statements and 
properties, such as pageCountSummary. Remember DRY (Don't Repeat Yourself)*/
/* let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary) */

/*Challenge time! Create a function that takes Fahrenheit in, returns an object with
3 temps: Fahrenheit, Celsius and Kelvin. Use the functions-101.js exercise if you 
forgot the conversion formulas*/


let tempConverter = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        converttoCelsius: (fahrenheit - 32) * 5/9,
        converttoKelvin: (fahrenheit + 459.67) * 5/9 
    }

}

let temps = tempConverter(60)
console.log(temps)