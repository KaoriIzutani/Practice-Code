x = 10
y = 20
print(x + y)

if x == 100:
     print("x is 100") # Always indent four spaces on the next space for readability and 
	 # # syntax reasons. Ctrl +K in Notepad ++ to multi-line comment out. Ctrl + Shift + K 
	 # # to uncomment.

elif x == 99:
    print("x is 99")

elif x == 98:
    print("x is 98")
	
else:
    print("x is not 100 or 99")
    
if x % 2 == 0:
   print("x is even")
   
else:
   print("x is odd")
   

## for loops in Python
for i in range(101):
    print(i)
	
for my_variable in range(1,101):
   print(my_variable)
   
while x > 0:
   print(x) # Everything that is indented is part of the while loop. In this case, as long as 
   # x > 0, the while loop continues to run True, until the statement is no longer True.
   x -= 1

print("Happy New Year's")