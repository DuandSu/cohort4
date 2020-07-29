import xls_app_tools

print ("-------------------------------------------------------------------------------")
print(f"\nWelcome to the MunRobinson Print Invoice App!")

userInputInv = ""
userInputDisp = ""
while userInputInv != "q":
    userInputInv = input(f'\nPlease Input the Invoice Number to Print (<Enter> to Quit): ')
    try:
        userInputInv = int(userInputInv)
        userInputDisp = input(f'Filename for Output (<Enter for Display to Terminal>: ')
        xls_app_tools.print_invoice(userInputInv, userInputDisp)
    except:
        if userInputInv == "":
            userInputInv = "q"
        else:
            print(f"\nInvoice Number must contain only numbers.")
print(f"\nThanks for Using the Invoice Printer")
print("")
print("-------------------------------------------------------------------------------")
