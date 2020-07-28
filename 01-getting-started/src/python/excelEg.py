# from openpyxl import load_workbook
# wb = load_workbook(filename = 'MunRobinsonGardens.xlsx', read_only=True)
# print (wb.sheetnames)

## for row in ws.iter_rows(min_row=1, max_col=3, max_row=2, values_only=True):
# ws = wb['Company']
# for row in ws.iter_rows(values_only=True):
#     print(row)

# ws = wb['Location']
# for row in ws.iter_rows(values_only=True):
#     print(row)

# ws = wb['Customer']
# for row in ws.iter_rows(values_only=True):
#     print(row)

# ws = wb['Product']
# for row in ws.iter_rows(values_only=True):
#     print(row)

# ws = wb['Invoice']
# for row in ws.iter_rows(values_only=True):
#     print(row)

# ws = wb['InvoiceLine']
# for row in ws.iter_rows(values_only=True):
#     print(row)

# for row in ws.values:
#    for value in row:
#      print(value)

# wsRow = tuple(ws.rows)
# print (wsRow)

# for row in ws.rows:
#     for cell in row:
#         print(cell.value)

# print(ws['A1'].value)
# sheet_ranges = wb['range names']
# print(sheet_ranges['D18'].value)