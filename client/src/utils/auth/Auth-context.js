import React, { useEffect, useState, useContext, createContext } from "react";
import {auth} from "../../config/firebase";


export const currentUser = auth.currentUser;
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const isInitialized = () => {
	// 	return new Promise(resolve => {
	// 		auth.onAuthStateChanged(resolve)
	// 	})
  // }
  
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
  const sendResetEmail = async (email) => {
    await auth.sendPasswordResetEmail(email)
  }
  const signup = async (name, email, password, repassword) => {
    try {
      if(password !== repassword){
        throw Error('Password do not match')
      }
      await auth.createUserWithEmailAndPassword(email, password)
      return auth.currentUser.updateProfile({displayName : name})
    } catch(error){
      alert(error)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(() => setUser(auth.currentUser));
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      auth,
      signup,
      login,
      sendResetEmail,
      logout,
      // isInitialized
    }}>{children}</AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);