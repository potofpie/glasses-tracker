import { useState, useEffect } from 'react';
import {db} from "../../config/firebase";

export const useOrganizations = () => {
  const [organizations, setOrganizations] = useState({});

  useEffect(() => {
    let unsubsribe = db.collection("users");
    unsubsribe = unsubsribe.onSnapshot( snapshot => {
      const newOrganizations = snapshot.docs.map( organizations => (
        {
          id: organizations.id,
          ...organizations.data()
        }
      ))
      setOrganizations(organizations);
    });

    return () => unsubsribe();
  }, [])
  return {organizations, setOrganizations}
}
