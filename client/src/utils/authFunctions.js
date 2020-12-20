import { auth } from './resources/firebase'

export const authMethods = {
    // firebase helper methods go here... 
    signup: (email, password) => {
      auth().createUserWithEmailAndPassword(email,password) 
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
      },
    signin: (email, password) => {
  
      },
    signout: (email, password) => {
  
      },
    }