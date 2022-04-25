import React, { createContext, useContext } from 'react'
import { useAlert } from './useAlert';

export const AlertContext = createContext();
export const AlertContextProvider = ({children}) => {
  const {
    alert,
    setAlert,
    createAlert
  } = useAlert();

  return (
    <AlertContext.Provider value={
          {
            alert,
            setAlert,
            createAlert
          }
        }
    >
        {children}
    </AlertContext.Provider>
  )
}
export const useAlertValue = () => useContext(AlertContext);
