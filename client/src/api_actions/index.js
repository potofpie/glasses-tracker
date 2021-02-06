
const getGlasses = async (organizationId, setGlasses) => {
        var axios = require('axios');
    var data = JSON.stringify({"uid":"csddcs","organizationId":organizationId,"page":0});

    var config = {
    method: 'post',
    url: 'https://us-central1-glasses-tracker.cloudfunctions.net/getGlasses',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
        setGlasses(response.data.results);
    })
    .catch(function (error) {
    console.log(error);
    });
}


const addGlasses = ({
    uid,
    organizationId,
    SKU,
    size, 
    appearance,
    lensType,
    material,
    ODSphere,
    OSSphere,
    ODCylinder,
    OSCylinder,
    ODAxis,
    OSAxis,
    ODAdd,
    OSAdd
  }) => {
    var axios = require('axios');
    var data = JSON.stringify({
        uid,
        organizationId,
        SKU,
        size, 
        appearance,
        lensType,
        material,
        ODSphere,
        OSSphere,
        ODCylinder,
        OSCylinder,
        ODAxis,
        OSAxis,
        ODAdd,
        OSAdd
      });
    
    var config = {
        method: 'post',
        url: 'https://us-central1-glasses-tracker.cloudfunctions.net/addGlasses',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    
    axios(config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });   
}

export {addGlasses, getGlasses }