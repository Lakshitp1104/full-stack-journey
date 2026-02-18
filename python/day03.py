# # WAP to aks the user enter name of their 3 fav movies and strore them in a list 
# input1 = input("Enter the names of your 1 favorite movies: ")
# input2= input("Enter the names of your 2 favorite movies: ")
# input3= input("Enter the names of your 3favorite movies: ")
# movies = [input1, input2, input3]
# print(movies)

# # WAP to check if a list is contains a palindrome of element  
# list = [1, 2, 1]
# list_copy = list.copy()
# list_copy.reverse()
# if (list == list_copy):
#     print("The list is a palindrome")
# else:  
#      print("The list is not a palindrome")

# # WAP to count the number of student with the "A" grade in the folowing tuple
# students = ("C", "D", "A", "A", "B", "B", "A")
# print(students.count("A"))


# stole the above values in list and sort them from "A" TO  "D"
student = ["C", "D", "A", "A", "B", "B", "A"]
student.sort()
print(student)