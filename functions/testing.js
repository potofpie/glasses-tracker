const admin = require('firebase-admin');
let serviceAccount = require("./glasses-tracker-firestore.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://glasses-tracker-default-rtdb.firebaseio.com"
});


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
    // const aggrigated;
    {
        const a_diffODAxis = Math.abs(normalize(a.ODAxis,'axis') - normalize(saerchItem.ODAxis,'axis'));
        const b_diffODAxis = Math.abs(normalize(b.ODAxis,'axis') - normalize(saerchItem.ODAxis,'axis'));
        //
        const a_diffOSAxis = Math.abs(normalize(a.OSAxis,'axis') - normalize(saerchItem.OSAxis,'axis'));
        const b_diffOSAxis = Math.abs(normalize(b.OSAxis,'axis') - normalize(saerchItem.OSAxis,'axis'));
    }

    {
        const a_diffODCylinder = Math.abs(normalize(a.ODCylinder,'cylinder') - normalize(saerchItem.ODCylinder,'cylinder'));
        const b_diffODCylinder = Math.abs(normalize(b.ODCylinder,'cylinder') - normalize(saerchItem.ODCylinder,'cylinder'));
        //
        const a_diffOSCylinder = Math.abs(normalize(a.OSCylinder,'cylinder') - normalize(saerchItem.OSCylinder,'cylinder'));
        const b_diffOSCylinder = Math.abs(normalize(b.OSCylinder,'cylinder') - normalize(saerchItem.OSCylinder,'cylinder'));
    }

    {
        const a_diffODAdd = Math.abs(normalize(a.ODAdd,'add') - normalize(saerchItem.ODAdd,'add'));
        const b_diffODAdd = Math.abs(normalize(b.ODAdd,'add') - normalize(saerchItem.ODAdd,'add'));
        //
        const a_diffOSAdd = Math.abs(normalize(a.OSAdd,'add') - normalize(saerchItem.OSAdd,'add'));
        const b_diffOSAdd = Math.abs(normalize(b.OSAdd,'add') - normalize(saerchItem.OSAdd,'add'));
    }

    {
        const a_diffODSphere = Math.abs(normalize(a.ODSphere,'sphere') - normalize(saerchItem.ODSphere,'sphere'));
        const b_diffODSphere = Math.abs(normalize(b.ODSphere,'sphere') - normalize(saerchItem.ODSphere,'sphere'));
        //
        const a_diffOSSphere = Math.abs(normalize(a.OSSphere,'sphere') - normalize(saerchItem.OSSphere,'sphere'));
        const b_diffOSSphere = Math.abs(normalize(b.OSSphere,'sphere') - normalize(saerchItem.OSSphere,'sphere'));
    }

    const a_GeneralDiff = a_diffODAxis + a_diffOSAxis + a_diffODCylinder + a_diffOSCylinder + a_diffODAdd + a_diffOSAdd + a_diffODSphere + a_diffOSSphere;
    const b_GeneralDiff = b_diffODAxis + b_diffOSAxis + b_diffODCylinder + b_diffOSCylinder + b_diffODAdd + b_diffOSAdd + b_diffODSphere + b_diffOSSphere;
    if(aGeneralDiff  >  bGeneralDiff ){
        return  1
    }
    else if(aGeneralDiff  <  bGeneralDiff ){
        return  -1
    }
    else {
        return 0
    }
}

const testQuerry = async () => {
    const snapshot = await admin.firestore()
    .collection('organizations')
    .doc('606kb1SvQWWr2DtGGroS')
    .collection('glasses_in_stock')
    .get();
    const tempGlasses = {
        id: '303',
        OSAxis: 30,
        OSCylinder: -0.25,
        OSSphere: 2,
        OSAdd: 2.25,
        
        ODSphere: 2,
        ODAxis: 101,
        ODCylinder: -0.25,
        ODAdd: 2.25,
        
        lensType: 'Bifocal',
        // createDate: Timestamp { _seconds: 1430784000, _nanoseconds: 0 },
        size: 'Small',
        appearance: 'Neutral',
      }
    const results = await snapshot.docs.map(doc => {
        let id =doc.id;
        return { id, ...doc.data()}
      });


    const sorted = results.sort(function (a, b) {
        return compare(tempGlasses,a,b);
    });
    const items = sorted.slice(0, 5).map(i => {
        return i
    })
    console.log(items)
}

testQuerry()

