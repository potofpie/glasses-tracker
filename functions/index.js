'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch');
admin.initializeApp();



const normalize = (val,type) => {

  const minMaxesValues = {
      sphere: {min: -20 , max: 20},
      cylinder: {min: -6, max: 0},
      axis: {min: 1, max: 180,  },
      add: {min: .5, max: 4, },
      general: {min:0, max: 4}
  }
  // console.log((val - minMaxesValues[type].min) / (minMaxesValues[type].max - minMaxesValues[type].min))
  return (val - minMaxesValues[type].min) / (minMaxesValues[type].max - minMaxesValues[type].min); 
}

const compare = (saerchItem,a,b) => {

  const a_diffODAxis = Math.abs(normalize(a.ODAxis,'axis') - normalize(saerchItem.ODAxis,'axis'));
  const b_diffODAxis = Math.abs(normalize(b.ODAxis,'axis') - normalize(saerchItem.ODAxis,'axis'));
  const a_diffOSAxis = Math.abs(normalize(a.OSAxis,'axis') - normalize(saerchItem.OSAxis,'axis'));
  const b_diffOSAxis = Math.abs(normalize(b.OSAxis,'axis') - normalize(saerchItem.OSAxis,'axis'));
 
  const a_diffODCylinder = Math.abs(normalize(a.ODCylinder,'cylinder') - normalize(saerchItem.ODCylinder,'cylinder'));
  const b_diffODCylinder = Math.abs(normalize(b.ODCylinder,'cylinder') - normalize(saerchItem.ODCylinder,'cylinder'));
  const a_diffOSCylinder = Math.abs(normalize(a.OSCylinder,'cylinder') - normalize(saerchItem.OSCylinder,'cylinder'));
  const b_diffOSCylinder = Math.abs(normalize(b.OSCylinder,'cylinder') - normalize(saerchItem.OSCylinder,'cylinder'));

  const a_diffODAdd = Math.abs(normalize(a.ODAdd,'add') - normalize(saerchItem.ODAdd,'add'));
  const b_diffODAdd = Math.abs(normalize(b.ODAdd,'add') - normalize(saerchItem.ODAdd,'add'));
  const a_diffOSAdd = Math.abs(normalize(a.OSAdd,'add') - normalize(saerchItem.OSAdd,'add'));
  const b_diffOSAdd = Math.abs(normalize(b.OSAdd,'add') - normalize(saerchItem.OSAdd,'add'));

  const a_diffODSphere = Math.abs(normalize(a.ODSphere,'sphere') - normalize(saerchItem.ODSphere,'sphere'));
  const b_diffODSphere = Math.abs(normalize(b.ODSphere,'sphere') - normalize(saerchItem.ODSphere,'sphere'));
  const a_diffOSSphere = Math.abs(normalize(a.OSSphere,'sphere') - normalize(saerchItem.OSSphere,'sphere'));
  const b_diffOSSphere = Math.abs(normalize(b.OSSphere,'sphere') - normalize(saerchItem.OSSphere,'sphere'));


  const a_GeneralDiff = a_diffODAxis + a_diffOSAxis + a_diffODCylinder + a_diffOSCylinder + a_diffODAdd + a_diffOSAdd + a_diffODSphere + a_diffOSSphere;
  const b_GeneralDiff = b_diffODAxis + b_diffOSAxis + b_diffODCylinder + b_diffOSCylinder + b_diffODAdd + b_diffOSAdd + b_diffODSphere + b_diffOSSphere;
  if(a_GeneralDiff  >  b_GeneralDiff ){
      return  1
  }
  else if(a_GeneralDiff  <  b_GeneralDiff ){
      return  -1
  }
  else {
      return 0
  }
}

const cors = require('cors')({origin: true});

//add check to see if sku exists already so not to overwrite data
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


exports.searchGlasses = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const {
        uid,
        organizationId,
        page,
        glassesToMatch
      } = req.body;
      const snapshot = await admin.firestore()
        .collection('organizations')
        .doc(organizationId)
        .collection('glasses_in_stock').get();
  
      const results = await snapshot.docs.map(doc => {
          let id =doc.id;
          return { id, ...doc.data()}
      });
    
      const sorted = results.sort(function (a, b) {
          return compare(glassesToMatch,a,b);
      });
      res.set('Access-Control-Allow-Origin', '*');
      res.json({results: sorted},200);
    } catch(error) {
      res.set('Access-Control-Allow-Origin', '*');
      res.json({results: error},401);
    }
  })
});