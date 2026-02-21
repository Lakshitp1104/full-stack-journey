# # print number from 1 yo 100
# i =1
# while i<=100:
#     print(i)
#     i+=1

# # # print number from 100  to 1

# i =100
# while i>=1:
#     print(i)
#     i-=1


#print the multication table of N

# n=int(input("Enter the number: "))
# i=1
# while i<=10:
#     print(n*i)
#     i+=

# #print the element of the following list using loop:[1,4,9,16,25,36,49,64,81,100]

# list = [1,4,9,16,25,36,49,64,81,100]
# idx = 0
# while idx < len(list):
#     print(list[idx])
#     idx+=1

# #search for the number x in this tuple using loop : [1,4,9,16,25,36,49,64,81,100]

# list =[1,4,9,16,25,36,49,64,81,100]
# x = int(input("Enter the number to search: "))
# idx =0
# while idx < len(list):
#     if list[idx] == x:
#         print("Number found at index:", idx)
#     idx+=1




# #  print number from 1 to 100
# for value in range(1, 101):
#     print(value)


# #print number from 100 to 1
# for value in range(100,0,-1):
#     print(value)


# # #print the multiplication table of N
# n =int(input("Enter the number: "))
# for i in range(1,11):
#     print(n*i)

# # WAP to find the sum of first n numbers (using while)
# n =int(input("enter the number: "))
# sum=0
# for i in range(1,n+1):
#     sum+=i
# print("total numbers is sum :", sum)

# WAP to find the factorial of a number (using while)
n = int(input("Enter the number: "))
fact =1
i = 1
while i <= n:

    fact *= i 
    i += 1
    print ("Factorial is :", fact)
