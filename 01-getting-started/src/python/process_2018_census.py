import census

print ("-------------------------------------------------------------------------------")
f = open("Census_by_Community_2018.csv", "r")

# Read past the titles row
f.readline()
countLines = 1

for x in f:
    
    x += ","
    countLines += 1
    recordLen = len(x)
    currColumn = 0
    commaChar = 0
    startChar = 0
    endChar = 0
    multiPolygon = x.index("MULTIPOLYGON")

    while startChar <= recordLen and startChar < multiPolygon:
        commaChar = x.index(",", startChar)
        value = x[startChar: commaChar]
        print(f"startChar = {startChar}; commaChar = {commaChar}; value = {value}")
        census.censusRecord[currColumn] = value
        currColumn += 1
        startChar = commaChar + 1

    currClass = census.censusRecord[census.censusDefn["CLASS"]]
    currSector = census.censusRecord[census.censusDefn["SECTOR"]]
    currResCnt = census.censusRecord[census.censusDefn["RES_CNT"]]
    print (f'CLASS: {currClass}; SECTOR: {currSector}; RES_CNT: {currResCnt}')

print(f'\n-- Calgary 2018 Census by Community had {countLines} lines.')

f.close()
print("")
print("-------------------------------------------------------------------------------")