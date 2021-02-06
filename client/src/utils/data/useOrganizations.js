import { useState, useEffect } from 'react';
import { useAuth } from '../../utils/auth/Auth-context'
import {db} from "../../config/firebase";

export const useOrganizations = () => {
  const {user} = useAuth();
  const [organizations, setOrganizations] = useState(null);
    useEffect(() => {
        if(user){
          let unsubsribe = db.collection("organizations")
          .where('users', "array-contains", user.uid);
          unsubsribe = unsubsribe.onSnapshot( snapshot => {
            const newOrganizations = snapshot.docs.map( organization => (
              {
                id: organization.id,
                ...organization.data()
              }
              ))
              setOrganizations(newOrganizations);
            });
          return () => unsubsribe();
        }
      }, [user])
      return {organizations, setOrganizations}

}
