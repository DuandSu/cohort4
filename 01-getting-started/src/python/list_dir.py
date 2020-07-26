import os

print("--------------------------------------------------------------------------------")
print("File List for the Current Directory:") 
print("--------------------------------------------------------------------------------")

Column_Width = 80
Static_Width = 8 + 1 + 1 + 6

fileCount = 0
fileSizeSum = 0
with os.scandir('./') as entries:
    for entry in entries:
        fileCount += 1
        entryNameWidth = len(entry.name)
        info = entry.stat()
        infoSizeWidth = len(str(info.st_size))
        fileSizeSum += int(info.st_size)
        dividerWidth = Column_Width - Static_Width - entryNameWidth - infoSizeWidth
        dividerLine = dividerWidth * "-"
        print(f"-- File {entry.name} {dividerLine} {info.st_size} Bytes")

print("--------------------------------------------------------------------------------")
print(f"Total Files: {fileCount}; Total Size: {fileSizeSum} Bytes")
print("--------------------------------------------------------------------------------")
