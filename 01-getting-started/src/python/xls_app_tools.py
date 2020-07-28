import datetime
from openpyxl import load_workbook

def loadLocation(excelFile):
    wb = load_workbook(filename = excelFile, read_only=True)
    ws = wb['Location']

    locDict = {}
    for row in ws.iter_rows(values_only=True):
        locDict[row[0]] = row[1]

    return locDict

def loadCompany(excelFile):
    wb = load_workbook(filename = excelFile, read_only=True)
    ws = wb['Company']

    compDict = {}
    for row in ws.iter_rows(values_only=True):
        compDict[row[0]] = row[1]

    return compDict

def loadCustomer(excelFile):
    wb = load_workbook(filename = excelFile, read_only=True)
    ws = wb['Customer']

    custDict = {}
    for row in ws.iter_rows(values_only=True):
        custDict[row[0]] = (row[1],row[2],row[3],row[4],row[5],row[6])

    return custDict

def loadProduct(excelFile):
    wb = load_workbook(filename = excelFile, read_only=True)
    ws = wb['Product']

    prodDict = {}
    for row in ws.iter_rows(values_only=True):
        prodDict[row[0]] = (row[1],row[2],row[3])

    return prodDict

def loadInvoice(excelFile):
    wb = load_workbook(filename = excelFile, read_only=True)
    ws = wb['Invoice']

    invDict = {}
    for row in ws.iter_rows(values_only=True):
        # yearComma = row[1].index(",") - 4
        # yearEnd = yearComma + 4
        # year = row[1][yearComma:yearEnd]
        # dStr = row[1].strftime("%Y-%m-%d")
        # dStr = row[1][0:10]
        invDict[row[0]] = (row[1], row[2])

    return invDict

def loadInvLine(excelFile):
    wb = load_workbook(filename = excelFile, read_only=True)
    ws = wb['InvoiceLine']

    invLnDict = {}

    for row in ws.iter_rows(values_only=True):
        invLnDict[(row[0], row[1])] = (row[2],row[3],row[4],row[5],row[6],row[7])

    return invLnDict

def getInv(invNo, invDict, invLnDict):

    invToPrint = []

    for inv in invDict:
        if inv == invNo:
            invDate = invDict[inv][0]
            custNo = invDict[inv][1]

    for invLi in invLnDict:
        if invLi[0] == invNo:
            # print(invLi, invLnDict[invLi])
            invToPrint.append((invLi[0], invLi[1], invDate, custNo, 
                    invLnDict[invLi][0], invLnDict[invLi][1], invLnDict[invLi][2],
                    invLnDict[invLi][3], invLnDict[invLi][4], invLnDict[invLi][5]
                ))

    return invToPrint