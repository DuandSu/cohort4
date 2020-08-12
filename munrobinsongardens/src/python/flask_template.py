import os
from flask import Flask, jsonify, render_template
from flask_cors import CORS
import xls_app_tools

app = Flask(__name__)
app.secret_key = os.urandom(16)
CORS(app, supports_credentials=True)

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

@app.route('/comp', methods=['POST', 'GET'])
def getComp():
    return jsonify(compDict)

@app.route('/cust', methods=['POST', 'GET'])
def getCust():
    return jsonify(custDict)

@app.route('/prod', methods=['POST', 'GET'])
def getProd():
    return jsonify(prodDict)

@app.route('/inv')
def getInv():
    return jsonify(invDict)

@app.route('/invln')
def getInvLn():
    return jsonify(invLnDict2JSON)

@app.route('/inv/<int:invno>', methods=['POST', 'GET'])
def getInvNo(invno):
    invToPrint = xls_app_tools.getInv(invno, invDict, invLnDict)
    return jsonify(invToPrint)

app.run(port=5000)
