import { useState, useEffect } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState(null);
  let alertTimeout;
  const createAlert = (type, text) => {
    if(alertTimeout){
      clearTimeout(alertTimeout);
    }
    setAlert({type, text});
    setTimeout(() => {setAlert(null)}, 8000);
  }
  return {alert, setAlert, createAlert}
}
