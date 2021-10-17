x = 10
y = 20
print(x + y)

# if x == 100:
     # # print("x is 100") # Always indent four spaces on the next space for readability and 
	 # # syntax reasons. Ctrl + K in Notepad ++ to multi-line comment out. Ctrl + Shift + K 
	 # # to uncomment.

    # elif x == 99:
    # print("x is 99")

    # elif x == 98:
    # print("x is 98")
	
    # else:
    # print("x is not 100 or 99")
    
if x % 2 == 0:
   print("x is even")
   
else:
   print("x is odd")
   

# For loops in Python
for i in range(0, 100):
    print(i)
    print(i + 1000) 
	
for my_variable in range(1,101):
    print(my_variable)
	
   
while x > 0:
   # Everything that is indented is part of the while loop. In this case, as long as 
   # x > 0, the while loop continues to run True, the loop runs until the statement is no 
   # longer True.
   x -= 1
   if x == 6:
       continue
   if x == 3:
       continue
   print(x) # This program skipped counting 6 and 3 in the loop.

print("Happy New Year's")

input("Tell me your name: ") # "input" is a built in function that allows you to collect data 
# from the user. The input can also be stored as a var.

name = input("Tell me your name: ")
name = None
while name != "Kaori": 
    name = input("Tell me your name: ")
    print(name)
    if name == "Harry":
	    break # Indent 4 times before a "break" or "continue" statement.
	
print("We broke out of our loop!")

name = None
while True:
    print("Hi there")
    break # If you don't put a break statement here, you will get an infinite loop.


def my_fun(x): 
    # print("Hi!")
    # print("Boo-boo head")
    # print(1 + 1)
    print(x)
	
my_fun(100)

# for i in range(100): # This for loop allows you to call the function 100 times without 
# needing to call it 100 {or how many times you define it inside the parenthesis} times. 
    # my_fun()

    
	
	
    
