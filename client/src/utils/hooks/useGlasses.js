
import React, { createContext, useContext } from 'react'
import { useGoals } from '../hooks/useGoals';

export const GoalsContext = createContext();
export const GoalsContextProvider = ({children}) => {
  const {
    Goals,
    setGoals
  } = useGoals();

  return (
    <GoalsContext.Provider value={
          {
            Goals,
            setGoals
          }
        }
    >
        {children}
    </GoalsContext.Provider>
  )
}
export const useGoalsValue = () => useContext(GoalsContext);