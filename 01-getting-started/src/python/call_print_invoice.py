import xls_app_tools

print ("-------------------------------------------------------------------------------")
print(f"\nWelcome to the MunRobinson Print Invoice App!")

userInput = ""
while userInput != "q":
    userInput = input(f'\nPlease Input the Invoice Number to Print (<Enter> to Quit): ')
    try:
        userInput = int(userInput)
        xls_app_tools.print_invoice(userInput)
    except:
        userInput = "q"
print(f"\nThanks for Using the Invoice Printer")
print("")
print("-------------------------------------------------------------------------------")
