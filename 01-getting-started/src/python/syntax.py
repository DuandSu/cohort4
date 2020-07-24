# This is competency 200, which says go back to JavaScript 100C and implement in Python.
# The purpose of this Python is to use all of the below. Each documentation line is repeated later in the script 
# when actually used.
#
# define attributes / variables
# number
# string
# boolean
# array
# dictionary / objects
# undefined
# sample if / else
# functions
# parameters
# returns
# arrays
# add to the front
# add to the end
# update values
# loops 
# for
# for/in
# while
# do while
# forEach (with array and function)
# Objects / Dictionaries
# declare object
# lookup key to retrieve the value

# define attributes / variables
# number: Python "int"
firstNumber = 1
print(firstNumber)

# Python "float"
firstFloat = 1.1
print(firstFloat)

# string: Python "string"
firstString = "This is my first Python String"
print(firstString)

# boolean: Python boolean
firstBoolean = True
print(firstBoolean)

# array: Python list
firstList = [1, 2, 3, 4]
print(firstList)

# array: Python Tuple
firstTuple = (1, 2, 3, 4)
print(firstTuple)

# array: Python Set
firstSet = {1, 2, 3, 4}
print(firstSet)

# dictionary / objects
firstDict = {"first": 1, "second": 2, "third": 3, "fourth": 4, "fifth": 5}
print(firstDict)

# undefined: Python has None. It does not have null. Undefined is not a set value, but can show in an error message if
# not defined. Using try/catch to capture undefined to demonstrate.

firstNone = None
print(firstNone)
print(firstNone == None)
print(firstNone is None)

try:
    print ("firstNone Defined: ", firstNone)
except NameError:
    print ("firstNone NOT defined")

try:
    print ("firstUndefined Defined: ", firstUndefined)
except NameError:
    print ("firstUndefined NOT defined")

# print(firstNoneNotDefined) -- Results in "NameError: name 'firstNoneNotDefined' is not defined"
# sample if / else: Python if / elif / else
if (firstBoolean):
    print(f"Met if condition because firstBoolean = {firstBoolean}")
elif (not firstBoolean):
    print(f"Met elif condition because firstBoolean = {firstBoolean}")
else:
    print(f"Met else condition because firstBoolean = {firstBoolean}")

firstBoolean = False
if (firstBoolean):
    print(f"Met if condition because firstBoolean = {firstBoolean}")
elif (not firstBoolean):
    print(f"Met elif condition because firstBoolean = {firstBoolean}")
else:
    print(f"Met else condition because firstBoolean = {firstBoolean}")

firstBoolean = None
if (firstBoolean):
    print(f"Met if condition because firstBoolean = {firstBoolean}")
elif (not firstBoolean):
    print(f"Met elif condition because firstBoolean = {firstBoolean}")
else:
    print(f"Met else condition because firstBoolean = {firstBoolean}")

if (firstNumber == 3):
    print(f"Met if condition because firstNumber = {firstNumber}")
elif (firstNumber == 2):
    print(f"Met elif condition because firstNumber = {firstNumber}")
else:
    print(f"Met else condition because firstNumber = {firstNumber}")

# functions
# parameters / arguments
# returns
def checkNumber(firstNumber):
    returnResult = ""
    if (firstNumber == 3):
        returnResult = f"Met if condition because firstNumber = {firstNumber}"
    elif (firstNumber == 2):
        returnResult = f"Met elif condition because firstNumber = {firstNumber}"
    else:
        returnResult = f"Met else condition because firstNumber = {firstNumber}"
    return returnResult

print (checkNumber(firstNumber))
print (checkNumber(firstNumber+1))
print (checkNumber(firstNumber+2))

# functions: Python lambda
noCheckNumber = lambda x: f"I am a short function. No checking for {x}."
print (noCheckNumber(firstNumber))

# functions: Multiple args

def addNum(*args):
    total = 0
    for arg in args:
        total += arg
    return total

print(f"Add numbers (10, 20, 30, 40): {addNum(10, 20, 30, 40)}")

# arrays: Python Lists
# add to the front
print(firstList)
firstList.append(5)
print (firstList)
# add to the end
firstList.insert(0, 6)
print (firstList)
# update values
firstList[0] = 0
print (firstList)

# loops 
# for
print("for i: firstList")
for i in range(len(firstList)):
    print (i, firstList[i])

print("for i: firstTuple")
for i in range(len(firstTuple)):
    print (i, firstTuple[i])

# Note the following does NOT work for sets since order is NOT guaranteed.
# print("for i: firstSet")
# for i in range(len(firstSet)):
#     print (i, firstSet[i])

# for/in
print("for in: firstList")
for elem in firstList:
    print(elem)

print("for in: firstTuple")
for elem in firstTuple:
    print(elem)

print("for in: firstSet")
for elem in firstSet:
    print(elem)

# loops 
# while
print("while: firstList")
i = 0
while i in range(len(firstList)):
    print (i, firstList[i])
    i += 1

# do while: Python does NOT exist, but can do similar, see following
print("do while: firstList")
i = 0
while True:
    print (i, firstList[i])
    i += 1
    if i not in range(len(firstList)):
        break

# forEach (with array and function): Python does NOT exist.
# Objects / Dictionaries
print(firstDict)
print(firstDict["first"])
for dictKey in firstDict:
    print(dictKey, firstDict[dictKey])

# declare object: Python objects are defined by class, otherwise just extensive nested dictionary.
firstObject = {
    "name": {"first": "Duane", "last": "Munro"},
    "age": 57,
    "address": {
        "addr1": "1819 Evergreen Drive SW",
        "addr2": "",
        "city": "Calgary",
        "prov": "Alberta",
        "country": "Canada"
    }
}
print(firstObject)
# lookup key to retrieve the value
print(f"Address for {firstObject['name']['first']} "
    + f"{firstObject['name']['last']} who is Age {firstObject['age']}:"
)
print(f"---- {firstObject['address']['addr1']}")
if firstObject['address']['addr2'] != "":
    print(f"---- {firstObject['address']['addr2']}")
print(f"---- {firstObject['address']['city']}, "
    + f"{firstObject['address']['prov']}, "
    + f"{firstObject['address']['country']} "
)

class Name:
    def __init__(self, first, last):
        self.first = first
        self.last = last

class Address:
    def __init__(self, addr1, addr2, postal, city, prov, country):
        self.addr1 = addr1
        self.addr2 = addr2
        self.postal = postal
        self.city = city
        self.prov = prov
        self.country = country

class Person:
    def __init__(self, first, last, age, addr1, addr2, postal, city, prov, country):
        self.name = Name(first, last)
        self.age = age
        self.address = Address(addr1, addr2, postal, city, prov, country)

duane = Person("Duane", "Munro", 57, "1819 Evergreen Drive SW", "", "T2Y 5B2", "Calgary", "Alberta", "Canada")

print(f"Address for {duane.name.first} {duane.name.last} who is Age {duane.age}")
print(f"---- {duane.address.addr1}")
if duane.address.addr2 != "":
    print(f"---- {duane.address.addr2}")
print(f"---- {duane.address.city}, "
    + f"{duane.address.prov}, "
    + f"{duane.address.country} "
)