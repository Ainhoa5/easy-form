import React from 'react';
import Input from "../components/ui/Input";
const Formulario = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center">
        <div className="w-full p-8 my-4 md:px-12 lg:w-7/12 lg:pl-20 lg:pr-40 rounded-2xl shadow-2xl bg-gray-800 lg:mx-auto lg:mr-80">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl text-white mb-10">Inicia Sesión</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5">
            <Input placeholder='ID de usuario' ></Input>
            <Input placeholder='Contraseña'></Input>
          </div>

          <div className="my-2 w-1/2 lg:w-1/4">
            <button className="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-48 focus:outline-none focus:shadow-outline mt-5 mb-9">
              Enviar
            </button>
          </div>

        </div>
        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-yellow-500 rounded-2xl lg:hover:scale-105 lg:transition-transform lg:duration-1000 lg:hover:cursor-pointer">
          <div className="flex flex-col text-black">
            <h1 className="font-bold uppercase text-4xl my-4">Bienvenido al portal </h1>
            <p className="text-gray-800">Ingresa con tu ID de usuario y contraseña para acceder a la plataforma de análisis de datos. Una vez autenticado, podrás visualizar y explorar los informes interactivos de Power BI
            </p>

            <div className="flex my-4 w-2/3 lg:w-full">
              <div className="flex flex-col">
                <h2 className="text-2xl">Datos requeridos</h2>
                <p className="text-gray-800">La ID administrada</p>
                <p className="text-gray-800">La contraseña asociada</p>
              </div>
            </div>

            <div className="mb-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
