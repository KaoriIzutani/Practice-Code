/* To comment out multiple lines of code shortcut: Alt + Shift + A. Press again to uncomment*/

//Global('Kaori')
 //Local
  //Local ('Andrew')
    //Local


let name = 'Kaori' //Global (name)

if(true){
    let name = 'Mike' 
    /*Local (name = 'Mike').  This is an example of var shadowing. It's an instance where a 
    local var "overshadows" the parent scope. It will use the value of the local var, instead of the
    global var. It's important to know, because if you want to use the same var name, you can do so,
    as long as each of the var are in different scopes*/

    if(true){
        name = 'Jen' /*What happens when you comment out your Global and "let name = Mike"? Then Jen
       is not defined using the let keyword. What you end up is what's called a "leaked global". If
        you haven't explicitly declared a var somewhere, it will auto create a global var, in this 
        case, 'Jen'. Not good, because it results in your code not working as expected, even if VS 
        Code doesn't catch it in the terminal.*/
        console.log(name) /*Local.  Which var is it going to read, Mike or Jen? In this case, it will 
        read "Jen". The scope tree will look to see if there is a local var we can reassign. Go up 
        one and you will find local var, 'Mike'. Thanks to var shadowing, 'Jen' will overwrite 'Mike' 
        in this case. */
    }
}

if(true){
    console.log(name)  /*Local. Which var is it going to read, Kaori, Mike or Jen? In this case, it 
    will only read 'Kaori'. Because we started a new code block, it will only access the global var,
     and not the local var, 'Mike'*/
    
}