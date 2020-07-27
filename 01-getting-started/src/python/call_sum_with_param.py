import sys 

print("Starting Program call_sum_with_param.py")  
# total arguments 
n = len(sys.argv) 
print("Total arguments passed:", n) 
  
# Arguments passed 
print("\nName of Python script:", sys.argv[0]) 
  
print("\nArguments passed:", end = " ") 
for i in range(1, n): 
    print(sys.argv[i], end = " ") 
      
# Addition of numbers 
Sum = 0
# Using argparse module 
for i in range(1, n): 
    Sum += int(sys.argv[i]) 
      
print("\n\nResult:", Sum) 