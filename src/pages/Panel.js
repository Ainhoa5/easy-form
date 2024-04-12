import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyToken } from '../services/authService';

const Panel = () => {
  const location = useLocation();
  const [isValidated, setIsValidated] = useState(true);
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const encodedUrl = queryParams.get('url');

    if (encodedUrl) {
      const decodedUrl = decodeURIComponent(encodedUrl);
      const url = new URL(decodedUrl); // Crea un objeto URL para manejar los componentes de la URL más fácilmente
      const rParam = url.searchParams.get('r'); // Obtiene el parámetro 'r'

      // Configura la URL del iframe dependiendo de si 'r' está disponible o no
      const newIframeUrl = rParam
        ? `${url.origin}${url.pathname}?r=${encodeURIComponent(rParam)}` // Usa 'r' si está disponible
        : `${url.origin}${url.pathname}`; // Usa solo la URL base si 'r' no está disponible
      setIframeUrl(newIframeUrl);

      const token = url.searchParams.get('token'); // Obtiene el token
      console.log("URL Params: ", url.searchParams);
      console.log("PANEL token: ", token);

      const checkToken = async () => {
        const isValid = await verifyToken(token);
        setIsValidated(isValid);
      };

      checkToken();
      const interval = setInterval(checkToken, 60000);

      return () => clearInterval(interval);
    }
  }, [location]);

  if (!isValidated) {
    return <p>Sesión expirada. Por favor, inicia sesión de nuevo.</p>;
  }

  return (
    <iframe src={iframeUrl} title="testf" width="100%" height="600px" frameBorder="0" allowFullScreen="true"></iframe>
  );
};

export default Panel;
