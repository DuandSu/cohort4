from flask import Flask, jsonify, render_template
import xls_app_tools

app = Flask(__name__)

# Load in Excel File
xlsDictArr = xls_app_tools.loadXLS()
locDict, compDict, custDict, prodDict, invDict, invLnDict = xlsDictArr
locDict.pop("locType")
compDict.pop("compCode")
custDict.pop("locCode")
prodDict.pop("prodNo")
invDict.pop("invNo")
invLnDict.pop(('invNo', 'lineNo'))
invLnDict2JSON = {str(invLi[0]) + "/" + str(invLi[1]): invLnDict[invLi] for invLi in invLnDict}

# default route
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/loc')
def getLoc():
    return jsonify(locDict)

@app.route('/comp')
def getComp():
    return jsonify(compDict)

@app.route('/cust')
def getCust():
    return jsonify(custDict)

@app.route('/prod')
def getProd():
    return jsonify(prodDict)

@app.route('/inv')
def getInv():
    return jsonify(invDict)

@app.route('/invln')
def getInvLn():
    return jsonify(invLnDict2JSON)

app.run(port=5000)
