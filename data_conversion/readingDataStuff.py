import re
import csv
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime

cred = credentials.Certificate("./glasses-tracker-firebase.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# SKU, TYPE, 
# ODSPHERE, ODCYLINDER, ODAXIS, ODADD, 
# OSSPHERE, OSCYLINDER, OSAXIS, 
# OSADD, GENDER, 
# MATERIAL, SIZE, TINT, ENTERDATE

def checkVarients():
    with open('./data/SAdata.txt','r') as f:
        output = f.read()
        rows = re.split('R[0-9]+:', output)
        rowsDict = {}
        for row in rows:
            cols = row.split()
            key = str(len(cols)) 
            if(not key in rowsDict):
                rowsDict[key] = {'count': 0, 'items': []}
            rowsDict[key]['items'].append(cols)
        # print(rowsDict['18'])
        for key in rowsDict:
            print({'key' : key,'count' : len(rowsDict[key]['items']), 'example' : rowsDict[key]['items'][0]})
            # print({'date' : rowsDict[key]['items'][0][-1]})
        
#checkVarients() 
def parseAndMapAttributes(): 
    with open('./data/SAdata.txt','r') as f:
        output = f.read()
        rows = re.split('R[0-9]+:', output)
        pairs = []
        pairDic = {}
        for row in rows:
            if(row):
                sku, lensType, ODSphere, ODCylinder, ODAxis, ODAdd, OSSphere, OSCylinder, OSAxis, OSAdd, appearance, material, size, tint, addDate  = row.split()
                pair = {'lensType' : lensType, 'ODSphere' : float(ODSphere), 'ODCylinder' : float(ODCylinder), 'ODAxis' : int(ODAxis), 'ODAdd' : float(ODAdd), 'OSSphere' : float(OSSphere), 'OSCylinder' : float(OSCylinder), 'OSAxis' : int(OSAxis), 'OSAdd' : float(OSAdd), 'appearance':appearance, 'material': material, 'size':size, 'createDate' :addDate}
                


                #lensType
                if(pair['lensType'] == 'S'):
                    pair['lensType'] = 'Single'
                elif(pair['lensType'] == 'B'):
                    pair['lensType'] = 'Bifocal'

                #appearance
                if(pair['appearance'] == 'F'):
                    pair['appearance'] = 'Feminine'
                elif(pair['appearance'] == 'U' or pair['appearance'] == 'M'):
                    pair['appearance'] = 'Neutral'

                #material
                if(pair['material'] == 'M'):
                    pair['material'] = 'Metal'
                elif(pair['material'] == 'P'):
                    pair['material'] = 'Plastic'


                #size 'Child','Small','Medium','Large'
                if(pair['size'] == 'C'):
                    pair['size'] = 'Child'
                elif(pair['size'] == 'S'):
                    pair['size'] = 'Small'
                elif(pair['size'] == 'M'):
                    pair['size'] = 'Medium'
                elif(pair['size'] == 'L'):
                    pair['size'] = 'Large'
                
                #material
                if(pair['material'] == '-'):
                    del pair['material']

                pair['createDate'] = datetime.strptime(pair['createDate'], "%Y%m%d")
                

                pairDic[sku] = pair

                yep = pair.copy()
                yep['sku'] = sku
                pairs.append(yep)
        # for i in pairs:
        #     print('\n\n')
        #     print(i)
        # return pairs
        return pairDic



def writeGlassesToCSV():
    pairs = parseAndMapAttributes()
    csv_columns = ['sku', 'lensType', 'ODSphere', 'ODCylinder', 'ODAxis', 'ODAdd', 'OSSphere', 'OSCylinder', 'OSAxis', 'OSAdd', 'appearance', 'material', 'size', 'addDate']
    csv_file = "glasses.csv"
    try:
        with open(csv_file, 'w') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
            writer.writeheader()
            for data in pairs:
                writer.writerow(data)
    except IOError:
        print("I/O error")
            


pairDic = parseAndMapAttributes()
for i in pairDic:
    if(int(i) < 500):
        db.collection(u'organizations').document('606kb1SvQWWr2DtGGroS').collection(u'glasses_in_stock').document(i).set(pairDic[i])