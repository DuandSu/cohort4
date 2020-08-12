from flask import Flask, jsonify
import xls_app_tools

app = Flask(__name__)

# Load in Excel File
xlsDictArr = []
# print (f"{xlsDictArr}")
# default route
@app.route('/')
def home():
    xlsDictArr = xls_app_tools.loadXLS()
    locDict, compDict, custDict, prodDict, invDict, invLnDict = xlsDictArr
    locDict.pop("locType")
    compDict.pop("compCode")
    custDict.pop("locCode")
    prodDict.pop("prodNo")
    invDict.pop("invNo")
    invLnDict.pop(('invNo', 'lineNo'))
    invLnDict2JSON = {str(invLi[0]) + "/" + str(invLi[1]): invLnDict[invLi] for invLi in invLnDict}
 
    return jsonify(
        locDict, compDict, custDict, prodDict, invDict, invLnDict2JSON
    )
    # return render_template('index.html')

app.run(port=5000)
