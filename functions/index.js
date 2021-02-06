'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors')({origin: true});
exports.addGlasses = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const { 
            uid,
            organizationId,
            lensType, 
            appearance, 
            material, 
            size, 
            ODSphere, 
            ODCylinder, 
            ODAdd,
            ODAxis,
            OSSphere, 
            OSCylinder, 
            OSAdd,
            OSAxis 
          } = req.body;
    const writeResult = await admin.firestore()
      .collection('organizations')
      .doc(organizationId)
      .collection('glasses_in_stock').add({ 
        lensType, 
        appearance, 
        material, 
        size, 
        ODSphere, 
        ODCylinder, 
        ODAdd,
        ODAxis,
        OSSphere, 
        OSSphere, 
        OSCylinder, 
        OSAdd,
        OSAxis 
    });
    res.set('Access-Control-Allow-Origin', '*');
    res.json({result: `Message with ID: ${writeResult.id} added.`},200);
  })
});

exports.getGlasses = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const {
      uid,
      organizationId,
      page
    } = req.body;
    const snapshot = await admin.firestore()
      .collection('organizations')
      .doc(organizationId)
      .collection('glasses_in_stock')
      .orderBy("size").limit(10).get();
    const results = await snapshot.docs.map(doc => {
        let id =doc.id;
        return { id, ...doc.data()}
      }); 
    res.set('Access-Control-Allow-Origin', '*');
    res.json({results: results},200);
  })
});