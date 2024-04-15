import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const SessionExpired = () => {
    const navigate = useNavigate(); // Hook para manejar la navegación

    const handleRedirect = () => {
        navigate('/'); // Redirige al usuario a la página de inicio
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-center text-lg text-gray-600 mb-4">
                Sesión expirada. Por favor, inicia sesión de nuevo.
            </p>
            <button
                onClick={handleRedirect} // Establece el evento onClick para redirigir
                className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
            >
                Volver al formulario
            </button>
        </div>
    );
};

export default SessionExpired;
