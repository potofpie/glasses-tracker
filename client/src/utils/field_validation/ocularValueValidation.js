export const validateOcularValue = (type, value, setValue, createAlert) => {
    let isValid = false;
    if(typeof value != 'number')
        isValid = false
    switch(type){
        case 'sphere': 
            isValid = !(value % .25) && value < -20 && value > 20 ?  true  : false
        case 'cylinder':
            isValid = !(value % .25) && value < -6 && value > 0 ?  true  : false
        case 'add':
            isValid = !(value % .5) && value < .5 && value > 4 ?  true  : false
        case 'axis':
            isValid = !(value % 1) && value >= 1 && value <= 180 ?  true  : false
    }
    console.log('isValid', isValid)
    if(!isValid){
        value = ''
        setValue('');
        createAlert('warning',`Please check your ${type} value!`)
    }
}

