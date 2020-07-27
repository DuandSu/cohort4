import census
#
# Note to come back later and refactor to automatically load in the dictionary "censusDefn". It might
# actually require an if statement to avoid the MULTIPOLYGON issue. No "Ifs" for competency.
#
# Note that am already essentially loading "censusRecord" automatically. Just define at beginning
# same as "censusResCntByCS". No need to pre-define in census.py.
#
# Also note that definitely used pytest to test necessary functionality. Never felt need though to
# break out into functions for easier test scripting though.
#
censusResCntByCS = {}

f = open("Census_by_Community_2018.csv", "r")

# Read past the titles row
f.readline()
countLines = 1
# Read every read until EOF
for x in f:
    
    x += ","
    countLines += 1
    recordLen = len(x)
    currColumn = 0
    commaChar = 0
    startChar = 0
    endChar = 0
    multiPolygon = x.index("MULTIPOLYGON")
    #
    # Parse through the record poplating the dictionary record.
    # Note that to meet special no "IF" conditions I am simply ignoring the last column which
    # is the MULTIPOLYGON, which I don't need to complete this competency. This column is surrounded 
    # by brackets, but has commas inside. To properly parse this strange beast I would need to add 
    # extra logic that requires an IF. Therefore, treating it almost like and EOL.
    #
    while startChar <= recordLen and startChar < multiPolygon:
        commaChar = x.index(",", startChar)
        value = x[startChar: commaChar]
        census.censusRecord[currColumn] = value
        currColumn += 1
        startChar = commaChar + 1
    currClass = census.censusRecord[census.censusDefn["CLASS"]]
    currSector = census.censusRecord[census.censusDefn["SECTOR"]]
    currResCnt = census.censusRecord[census.censusDefn["RES_CNT"]]

    try:
        censusResCntByCS[(currClass, currSector)] += int(currResCnt)
    except:
        censusResCntByCS[(currClass, currSector)] = int(currResCnt)

f.close()

f = open("report.txt", "w")
f.write("-------------------------------------------------------------------------------")
f.write(f'-- Calgary 2018 Census by Community had {countLines} lines.')
f.write("-------------------------------------------------------------------------------")

for resByCS in censusResCntByCS:
    f.write(f'---- Class/Sector {resByCS[0]}/{resByCS[1]} has ResCnt Total: {"{:,.0f}".format(censusResCntByCS[(resByCS[0],resByCS[1])])}')
f.write("-------------------------------------------------------------------------------")

f.close()