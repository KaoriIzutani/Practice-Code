let myBook = {
    title: 'Cracking the Coding Interview', 
    author: 'Gayle Laakman McDowell',
    pageCount: 326
}

//console.log(myBook.title) The 'myBook.title' is called a dot notation.
    /*To start defining an object, just type {}. No keyword before the curly braces
is needed. Inside the curly braces, you can define the object's properties (pieces of 
data stored on an object). Make sure to separate each property with a comma (except 
for the last property, doesn't need a comma).*/
/* console.log(`${myBook.title} by ${myBook.author}`) /*You can also use temp;ate strings 
to combine objects and properties*/

myBook.title = 'Cracking the Tech Career' /*You can change an object's property by 
reassigning the specific dot notation
console.log(`${myBook.title} by ${myBook.author}`)*/

/*Challenge time. Create an object of a person. Properties include name, age and 
location. Make your template string be 'Kaori is 42 and lives in Vancouver.' Then 
modify the age by 1.*/

let newProfile = {
    name: 'Kaori',
    age: 42,
    location: 'Vancouver'
}

console.log(`${newProfile.name} is ${newProfile.age} and lives in ${newProfile.location}.`)
/*When typing out your template string, it's not enough to state the property. You need 
to prefix it with the object's name as well.*/
newProfile.age = newProfile.age + 1 /*You can add stored numbers in objects, just like 
in functions*/
console.log(`${newProfile.name} is ${newProfile.age} and lives in ${newProfile.location}.`)
