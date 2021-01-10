import React, { createContext, useContext } from 'react'
import { useOrganizations } from './useOrganizations';

export const OrganizationsContext = createContext();
export const OrganizationsContextProvider = ({children}) => {
  const {
    organizations,
    setOrganizations
  } = useOrganizations();

  return (
    <OrganizationsContext.Provider value={
          {
            organizations,
            setOrganizations
          }
        }
    >
        {children}
    </OrganizationsContext.Provider>
  )
}
export const useOrganizationsValue = () => useContext(OrganizationsContext);
