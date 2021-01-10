import React, { useEffect, useState, useContext, createContext } from "react";
import {auth} from "../../config/firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  const isInitialized = () => {
		return new Promise(resolve => {
			auth.onAuthStateChanged(resolve)
		})
  }
  
  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch(error){
      alert(error)
    }
  }

  const  logout = async () => {
    try {
      await auth.signOut()
    } catch(error){
      alert(error)
    }

  }

  const signup = async (email, password, repassword) => {
    try {
      if(password !== repassword){
        throw Error('Password do not match')
      }
      await auth.signInWithEmailAndPassword(email, password)
    } catch(error){
      alert(error)
    }
  }


  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      auth,
      signup,
      login,
      logout,
      isInitialized
    }}>{children}</AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);