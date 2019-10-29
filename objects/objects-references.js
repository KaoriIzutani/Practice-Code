 let myAccount = {
    name: 'Kaori Izutani',
    expenses: 0,
    income: 0
}
/* let otherAccount = myAccount /*Object "otherAccount" is referencing the same myAccunt in 
memory
otherAccount.income = 1000
otherAccount = {} */

let addExpense = function (account, amount) {
    /*account = {} What happens when you reassign "account" to an empty object?* The result 
    is the 1st console.log will show the empty object. The 2nd console.log will show 
    { name: 'Kaori Izutani', expenses: 0, income: 0 }*/
    
    account.expenses = account.expenses + amount  
    /*The above allows you to manipulate or change the original properties you set up.*/
    //console.log(account)
} 

/*addExpense(myAccount, 2.50) when running these 2 lines of code (the "console.log(account)"), 
and "console.log(myAccount)"), the result is the same. 
What is happening here? Both are pointing to the same object in your RAM's memory. The
"console.log(account)" becomes a pointer to that object (myAccount) as well.
console.log(myAccount)*/

/*Challenge time: Make 3 different functions. 1st function is to add income to the account.
(Name it addIncome).*/

/*2nd function is called "resetAccount". This resets the expenses and 
income to 0. It needs to know which account to change. Default static value is 0.*/

/*3rd function is called "getAccountSummary". This function prints the account balance, 
total expenses and income. Sample output: "Acct for Kaori has $900. $1000 in income and 
$100 in expenses". Also include the account name in the function.*/

/*How each of the functions should be used: 
addIncome
addExpense
addExpense (Assume this account will have multiple expenses)
getAccountSummary
resetAccount
getAccountSummary*/

/*The two parameters are the account you want to change (account) and 
the amount you want to add on (income).*/
let addIncome = function(account,income)  {
     account.income = account.income + income
}

/*For the resetAccount function, you don't need to put in income and expenses
parameters, because they will have a static value of 0*/
let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income and 
    $${account.expenses} in expenses.`
}


addIncome(myAccount, 2000) /*Here you're going to change the properties that were 
initially set up under var "myAccount". AKA calling each of the functions you
created.*/
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount)) /*Make sure after you call 'getAccountSummary', 
you specify which account are you trying to pull the balance for in parenthesis.*/
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))