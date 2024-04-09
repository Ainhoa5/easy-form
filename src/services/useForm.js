import { useState } from 'react';
import axios from 'axios';

const useForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    limpiarError();

    try {
      console.log(userId);
      console.log(password);
      const response = await axios.post('http://localhost:3001/islas', {
        user_id: userId,
        password: password,
      });
      window.location.href = response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Usuario o contraseña incorrecta.');
      } else {
        setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  const limpiarError = () => {
    setError('');
  };

  return { userId, setUserId, password, setPassword, error, handleSubmit, limpiarError };
};

export default useForm;
