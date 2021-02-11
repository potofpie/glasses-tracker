import { useState, useEffect } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState('null');
  return {alert, setAlert}
}
