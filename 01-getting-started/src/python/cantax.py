#
#  Simple Tax Calculator for Only the Federal Tax.
#
def calculateFederalTax(grossIncome):

    incomeTax = 0.0
    if grossIncome <= 0:
        incomeTax = 0
    elif grossIncome <= 48535:
        incomeTax = 0.15*grossIncome
    elif grossIncome <= 97069:
        incomeTax = 0.205*(grossIncome-48535) + 7280
    elif grossIncome <= 150473:
        incomeTax = 0.26*(grossIncome-97069) + 17230
    elif grossIncome <= 214368:
        incomeTax = 0.29*(grossIncome-150473) + 31115
    else:
        incomeTax = 0.33*(grossIncome-214368) + 49645

    return incomeTax