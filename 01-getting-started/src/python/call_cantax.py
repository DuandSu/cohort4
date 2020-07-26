import cantax

print ("-------------------------------------------------------------------------------")
print(f"\nWelcome to the Tax Calculator!")

userInput = ""
while userInput != "q":
    userInput = input(f'\nPlease Input Your Total Gross Income (<Enter> to Quit): ')
    try:
        userInput = int(userInput)
        userTax = "${:,.2f}".format(cantax.calculateFederalTax(userInput))
        print(f"\nSMILE: You are paying the Government the following Income Tax: {userTax}")
    except:
        userInput = "q"
print(f"\nThanks for Using the Tax Calculator")
print("")
print("-------------------------------------------------------------------------------")
