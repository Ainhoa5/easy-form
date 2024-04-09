import React from 'react';
import useForm from '../services/useForm';
import { Input, Paragraph } from "../components/ui/index";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
  const { userId, setUserId, password, setPassword, error, handleSubmit, limpiarError } = useForm();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center">
        <div className="w-full p-8 my-4 md:px-12 lg:w-7/12 lg:pl-20 lg:pr-40 rounded-2xl shadow-2xl bg-gray-800 lg:mx-auto lg:mr-80">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl text-white mb-10">Inicia Sesión</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 mt-5">
              <Input placeholder='ID de usuario' id='user_id' value={userId}
                onChange={(e) => setUserId(e.target.value)} required></Input>
              <Input placeholder='Contraseña' id='password' type='password' value={password}
                onChange={(e) => setPassword(e.target.value)} required></Input>


            </div>

            <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-48 focus:outline-none focus:shadow-outline mt-5 mb-9">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-yellow-500 rounded-2xl lg:hover:scale-105 lg:transition-transform lg:duration-1000 lg:hover:cursor-pointer">
          <div className="flex flex-col text-black">
            <h1 className="font-bold uppercase text-4xl my-4">Bienvenido al portal </h1>
            <Paragraph>Ingresa con tu ID de usuario y contraseña para acceder a la plataforma de análisis de datos. Una vez autenticado, podrás visualizar y explorar los informes interactivos de Power BI</Paragraph>


            <div className="flex my-4 w-2/3 lg:w-full">
              <div className="flex flex-col">
                <h2 className="text-2xl">Datos requeridos</h2>
                <Paragraph>La ID administrada</Paragraph>
                <Paragraph>La contraseña asociada</Paragraph>
              </div>
            </div>

            <div className="mb-10"></div>
            <ErrorMessage mensaje={error} onClose={limpiarError} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
