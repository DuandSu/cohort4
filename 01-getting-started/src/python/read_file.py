print ("-------------------------------------------------------------------------------")
f = open("syntax.in", "r")

countLines = 0
countChars = 0
countElse = 0
#
# Note: Could have used "f.readline(), but also included elegant alorithm for using
# for/in. I am used to having to check for EOF, so this works well for me.
#
for x in f:
    
    countLines += 1
    #
    # Count characters in each line, ignoring the <CRLF> at the end of the line. While many would 
    # still view this as a character, it simply made it easier for me to verify working by using
    # Microsoft Word to check, which ignores the <CRLF> in its character count.
    #
    countChars += len(x)-1
    if x[:1] != "#":
        countElse += x.lower().count("else:")

# Last line has no <CRLF>, so add that subrtraction back in.
countChars += 1

print(f'\n-- File syntax.in had "{countLines}" lines and {countChars} characters (including spaces).')
print(f'---- Contained {countElse} occurences of the "else:" statement.')

f.close()
print("")
print("-------------------------------------------------------------------------------")