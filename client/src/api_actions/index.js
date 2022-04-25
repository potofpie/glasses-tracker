let axios = require('axios');
const searchGlasses = (
  createAlert,
  setGlasses,
  {
    uid,
    organizationId,
    glassesToMatch
  }) => {
    let data = JSON.stringify({
        uid,
        organizationId,
        glassesToMatch,
        page: 0
      });
    
    let request = {
        method: 'post',
        url: 'https://us-central1-glasses-tracker.cloudfunctions.net/searchGlasses',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    
    axios(request)
    .then(function (response) {
        setGlasses(response.data.results);
    })
    .catch(function (error) {
        createAlert('error' ,error.toString());
    });   
}

const addGlasses = (
    createAlert,
    {
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
    let data = JSON.stringify({
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
    let request = {
        method: 'post',
        url: 'https://us-central1-glasses-tracker.cloudfunctions.net/addGlasses',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    axios(request).then(function (response) {
        createAlert('success', `Added entry succesfully!`)
    }).catch((e) => {
        createAlert('error', `Panic and called Bobby: ${e.toString()}`)
    })
}

export { addGlasses, searchGlasses }