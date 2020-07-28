import datetime
import xls_app_tools

# Load in Excel File
locDict = xls_app_tools.loadLocation("MunRobinsonGardens.xlsx")
compDict = xls_app_tools.loadCompany("MunRobinsonGardens.xlsx")
custDict = xls_app_tools.loadCustomer("MunRobinsonGardens.xlsx")
prodDict = xls_app_tools.loadProduct("MunRobinsonGardens.xlsx")
invDict = xls_app_tools.loadInvoice("MunRobinsonGardens.xlsx")
invLnDict = xls_app_tools.loadInvLine("MunRobinsonGardens.xlsx")

Column_Width = 80

# Get Invoice Details
# invNo = 1
invNo = 2
invToPrint = xls_app_tools.getInv(invNo, invDict, invLnDict)
# Prepare for print invoice header section by grabbing data, lookups for description and 
# formatting. 
invDate = invToPrint[0][2]
invSep = 20 * " "
invCustNo = invToPrint[0][3]
invCustDesc = custDict[invCustNo][1]
invCompNo = custDict[invCustNo][0]
invCompDesc = compDict[invCompNo]

custStaticWidth = 3 + 10 + 1 + 3
custDescWidth = len(invCustDesc)
compDescWidth = len(invCompDesc)
custSepWidth = Column_Width - custStaticWidth - custDescWidth - compDescWidth
custSep = custSepWidth * " "

custAddr = custDict[invCustNo][3]

addrStaticWidth = 12 + 3
custAddrWidth = len(custAddr)
addrSepWidth = Column_Width - addrStaticWidth - custAddrWidth
addrSep = addrSepWidth * " "

print('')
print(f'--------------------------------------------------------------------------------')
print(f'-- Customer: {invCompDesc} {invCustDesc} {custSep}--')
print(f'-- Invoice No: {"{:0>6d}".format(invNo)}    Invoice Date: {invDate}{invSep}--')
print(f'-- Address: {custAddr}{addrSep} --')
print(f'--------------------------------------------------------------------------------')

# print invoice details.
invTotal = 0
for invLine in invToPrint:
    prodNo = invLine[4]
    prodDesc = prodDict[prodNo][0]
    prodQty = int(invLine[5])
    prodPrice = float(invLine[6])
    prodPriceDisp = "${:,.2f}".format(prodPrice)
    prodUnit = invLine[7]
    lineTot = prodQty * prodPrice
    invTotal += lineTot
    lineTotDisp = "${:,.2f}".format(lineTot)
    
    lineStaticWidth = 6 + 1 + 5 + 1 + 3
    prodDescWidth = len(prodDesc)
    prodQtyWidth = len(str(prodQty))
    prodPriceDispWidth = len(prodPriceDisp)
    prodUnitWidth = len(prodUnit)
    prodLineTotWidth = len(lineTotDisp)
    addrSepWidth = Column_Width - lineStaticWidth - prodDescWidth - prodQtyWidth - prodPriceDispWidth - prodUnitWidth - prodLineTotWidth
    lineSep = addrSepWidth * " "

    print(f'--    {prodDesc} {prodQty} for {prodPriceDisp}/{prodUnit}{lineSep}{lineTotDisp} --')

# print invoice summary
invTotDisp = "${:,.2f}".format(invTotal)
invTotStaticWidth = 6 + 6 + 3
invTotDispWidth = len(invTotDisp)
invTotSepWidth = Column_Width - invTotStaticWidth - invTotDispWidth
invTotSep = invTotSepWidth * " "

print(f'--                                                                  ------------')
print(f'--    Total {invTotSep}{invTotDisp} --')
print(f'--------------------------------------------------------------------------------')
print(f'-- MunRobinson Gardens THANKS you for your business.                          --')
print(f'-- Please Pay within 30 Days to avoid extra charges of 2 percent.             --') 
print(f'--------------------------------------------------------------------------------')