import React, { useState } from 'react';
import Input from "./ui/Input";
import Label from "./ui/Label";
import axios from 'axios';
import ErrorMessage from "./ErrorMessage";

export default function Form() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    limpiarError();

    try {
      // Realiza la petición POST con Axios
      const response = await axios.post('http://localhost:3001/islas', {
        user_id: userId,
        password: password,
      });

      // Usa la URL devuelta para redirigir al usuario
      window.location.href = response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Usuario o contraseña incorrecta.'); // Un mensaje de error específico
      } else {
        setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  const limpiarError = () => {
    setError('');
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-lg bg-white rounded-3xl shadow-md p-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 mb-3">
              Inicia Sesión
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor='user_id'>ID de Usuario</Label>
                <div className="mt-2">
                  <Input id='user_id' name='user_id' type='text'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} required></Input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">

                  <Label htmlFor='password'>Password</Label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-teal-600 hover:text-indigo-500">
                      Recuperar contraseña
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <Input id='password' name='password' type='password' autoComplete='current-password' value={password}
                    onChange={(e) => setPassword(e.target.value)} required></Input>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-800  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enviar
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              ¿No tienes credenciales?{' '}
              <a href="#" className="font-semibold leading-6 text-teal-600  hover:text-indigo-500">
                Contáctanos
              </a>
            </p>
          </div>
          <ErrorMessage mensaje={error} onClose={limpiarError} />
        </div>

      </div>
    </>
  )
}
