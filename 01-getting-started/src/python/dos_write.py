def DOSwrite(f, text):
    t2 = text.replace('\n', '\r\n')
    f.write(t2)
#example
f = open('/path/to/file')
DOSwrite(f, "line 1\nline 2")
f.close()