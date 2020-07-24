import syntax

def test_canAssertTrue():
    assert True


def test_TDD_Pipes():
    
    printLog = []
    printLog.append("Testing the TDD pipes")
    assert printLog[0] == "Testing the TDD pipes"

def test_firstNumber():
    firstNumber = 1
    assert firstNumber == 1

def test_firstFloat():
    firstFloat = 1.1
    assert firstFloat == 1.1

def test_firstString():
    firstString = "This is my first Python String"
    assert firstString == "This is my first Python String"

def test_firstBoolean():
    firstBoolean = True
    assert firstBoolean == True

def test_firstList():
    firstList = [1, 2, 3, 4]
    assert firstList == [1, 2, 3, 4]

def test_firstTuple():
    firstTuple = (1, 2, 3, 4)
    assert firstTuple == (1, 2, 3, 4)

def test_firstSet():
    firstSet = {1, 2, 3, 4}
    assert firstSet == {1, 2, 3, 4}

def test_firstDict():
    firstDict = {"first": 1, "second": 2, "third": 3, "fourth": 4, "fifth": 5}
    assert firstDict == {"first": 1, "second": 2, "third": 3, "fourth": 4, "fifth": 5}

def test_firstNone():
    firstNone = None

    assert firstNone == None
    assert firstNone is None

    tryResult = ""
    try:
        if firstNone == None: tryResult = "firstNone Defined: None"
    except NameError:
        tryResult = "firstNone NOT defined"

    assert tryResult == "firstNone Defined: None"

    tryResult = ""
    try:
        if firstUndefined == None: tryResult = "firstUndefined Defined: None"
    except NameError:
        tryResult = "firstUndefined NOT defined"

    assert tryResult == "firstUndefined NOT defined"

def test_IfConditions():
    firstBoolean = True
    condResult = ""
    if (firstBoolean):
        condResult = f"Met if condition because firstBoolean = {firstBoolean}"
    elif (not firstBoolean):
        condResult = f"Met elif condition because firstBoolean = {firstBoolean}"
    else:
        condResult = f"Met else condition because firstBoolean = {firstBoolean}"

    assert condResult == "Met if condition because firstBoolean = True"

    firstBoolean = False
    condResult = ""
    if (firstBoolean):
        condResult = f"Met if condition because firstBoolean = {firstBoolean}"
    elif (not firstBoolean):
        condResult = f"Met elif condition because firstBoolean = {firstBoolean}"
    else:
        condResult = f"Met else condition because firstBoolean = {firstBoolean}"

    assert condResult == "Met elif condition because firstBoolean = False"

    firstBoolean = None
    condResult = ""
    if (firstBoolean):
        condResult = f"Met if condition because firstBoolean = {firstBoolean}"
    elif (not firstBoolean):
        condResult = f"Met elif condition because firstBoolean = {firstBoolean}"
    else:
        condResult = f"Met else condition because firstBoolean = {firstBoolean}"

    assert condResult == "Met elif condition because firstBoolean = None"

    condResult = ""
    firstNumber = 1
    if (firstNumber == 3):
        condResult = f"Met if condition because firstNumber = {firstNumber}"
    elif (firstNumber == 2):
        condResult = f"Met elif condition because firstNumber = {firstNumber}"
    else:
        condResult = f"Met else condition because firstNumber = {firstNumber}"

    assert condResult == "Met else condition because firstNumber = 1"

def test_F_checkNumber():
    firstNumber = 1
    assert syntax.checkNumber(firstNumber) == "Met else condition because firstNumber = 1"
    assert syntax.checkNumber(firstNumber+1) == "Met elif condition because firstNumber = 2"
    assert syntax.checkNumber(firstNumber+2) == "Met if condition because firstNumber = 3"

def test_FLambda_noCheckNumber():
    firstNumber = 1
    assert syntax.noCheckNumber(firstNumber) == "I am a short function. No checking for 1."

def test_F_addNum():
    assert syntax.addNum(10, 20, 30, 40) == 100
    assert syntax.addNum(0, 20, 0, 30, 0) == 50
    assert syntax.addNum(1, 1, 1, 1, 1) == 5
    assert syntax.addNum(-1, -1, -1, -1, -1) == -5
    assert syntax.addNum(0, 0, 0, 0, 0) == 0

def test_Lists_Loops():
    firstList = [1, 2, 3, 4]
    assert firstList == [1, 2, 3, 4]

    firstList.append(5)
    assert firstList == [1, 2, 3, 4, 5]

    firstList.insert(0, 6)

    firstList[0] = 0
    assert firstList == [0, 1, 2, 3, 4, 5]

    #for i
    printLog = []
    for i in range(len(firstList)):
        printLog.append(f"{i} {firstList[i]}")

    assert printLog[0] == "0 0"
    assert printLog[1] == "1 1"
    assert printLog[2] == "2 2"
    assert printLog[3] == "3 3"
    assert printLog[4] == "4 4"
    assert printLog[5] == "5 5"

    # for/in
    printLog = []
    for elem in firstList:
        printLog.append(f"{elem}")

    assert printLog[0] == "0"
    assert printLog[1] == "1"
    assert printLog[2] == "2"
    assert printLog[3] == "3"
    assert printLog[4] == "4"
    assert printLog[5] == "5"

    # while
    printLog = []
    i = 0
    while i in range(len(firstList)):
        printLog.append(f"{i} {firstList[i]}")
        i += 1

    assert printLog[0] == "0 0"
    assert printLog[1] == "1 1"
    assert printLog[2] == "2 2"
    assert printLog[3] == "3 3"
    assert printLog[4] == "4 4"
    assert printLog[5] == "5 5"

    
    # do while: Python does NOT exist, but can do similar, see following
    i = 0
    while True:
        printLog.append(f"{i} {firstList[i]}")
        i += 1
        if i not in range(len(firstList)):
            break

    assert printLog[0] == "0 0"
    assert printLog[1] == "1 1"
    assert printLog[2] == "2 2"
    assert printLog[3] == "3 3"
    assert printLog[4] == "4 4"
    assert printLog[5] == "5 5"

    # forEach (with array and function): Python does NOT exist.

def test_Tuples_Loops():
    firstTuple = [1, 2, 3, 4]
    assert firstTuple == [1, 2, 3, 4]

    #for i
    printLog = []
    for i in range(len(firstTuple)):
        printLog.append(f"{i} {firstTuple[i]}")

    assert printLog[0] == "0 1"
    assert printLog[1] == "1 2"
    assert printLog[2] == "2 3"
    assert printLog[3] == "3 4"

    # for/in
    printLog = []
    for elem in firstTuple:
        printLog.append(f"{elem}")

    assert printLog[0] == "1"
    assert printLog[1] == "2"
    assert printLog[2] == "3"
    assert printLog[3] == "4"

def test_Sets_Loops():
    firstSet = [1, 2, 3, 4]
    assert firstSet == [1, 2, 3, 4]

    #for i
    # Note the following does NOT work for sets since order is NOT guaranteed.
    # printLog = []
    # for i in range(len(firstTuple)):
    #     printLog.append(f"{i} {firstTuple[i]}")

    # assert printLog[0] == "0 1"
    # assert printLog[1] == "1 2"
    # assert printLog[2] == "2 3"
    # assert printLog[3] == "3 4"

    # for/in
    printLog = []
    for elem in firstSet:
        printLog.append(f"{elem}")

    assert printLog[0] == "1"
    assert printLog[1] == "2"
    assert printLog[2] == "3"
    assert printLog[3] == "4"

def test_Dictionary():
    assert syntax.firstDict == {"first": 1, "second": 2, "third": 3, "fourth": 4, "fifth": 5}
    assert syntax.firstDict["first"] == 1

    printLog = []
    for dictKey in syntax.firstDict:
        printLog.append(f"{dictKey} {syntax.firstDict[dictKey]}")
        # print(dictKey, firstDict[dictKey])

    assert printLog[0] == "first 1"
    assert printLog[1] == "second 2"
    assert printLog[2] == "third 3"
    assert printLog[3] == "fourth 4"
    assert printLog[4] == "fifth 5"

def test_Objects():
    assert syntax.firstObject == {
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
    assert syntax.firstObject['name']['first'] == "Duane"
    assert syntax.firstObject['name']['last'] == "Munro"
    assert syntax.firstObject['age'] == 57
    assert syntax.firstObject['address']['addr1'] == "1819 Evergreen Drive SW"
    assert syntax.firstObject['address']['addr2'] == ""
    assert syntax.firstObject['address']['city'] == "Calgary"
    assert syntax.firstObject['address']['prov'] == "Alberta"
    assert syntax.firstObject['address']['country'] == "Canada"

def test_Classes():
    assert syntax.duane.name.first == "Duane"
    assert syntax.duane.name.last == "Munro"
    assert syntax.duane.age == 57
    assert syntax.duane.address.addr1 == "1819 Evergreen Drive SW"
    assert syntax.duane.address.addr2 == ""
    assert syntax.duane.address.city == "Calgary"
    assert syntax.duane.address.prov == "Alberta"
    assert syntax.duane.address.country == "Canada"