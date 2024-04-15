import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyToken } from '../services/authService';
import SessionExpired from '../components/SessionExpired';

const Panel = () => {
  const location = useLocation();
  const [isValidated, setIsValidated] = useState(true);
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const encodedUrl = queryParams.get('url');
    let interval;

    if (encodedUrl) {
      const decodedUrl = decodeURIComponent(encodedUrl);
      const url = new URL(decodedUrl); // Crea un objeto URL para manejar los componentes de la URL más fácilmente
      const rParam = url.searchParams.get('r'); // Obtiene el parámetro 'r'
      const token = url.searchParams.get('token'); // Obtiene el token

      // Configura la URL del iframe dependiendo de si 'r' está disponible o no
      const newIframeUrl = rParam
        ? `${url.origin}${url.pathname}?r=${encodeURIComponent(rParam)}` // Usa 'r' si está disponible
        : `${url.origin}${url.pathname}`; // Usa solo la URL base si 'r' no está disponible
      setIframeUrl(newIframeUrl);

      if (token) {
        const checkToken = async () => {
          const isValid = await verifyToken(token);
          setIsValidated(isValid);
        };

        // Llama a checkToken inmediatamente y luego configura el intervalo
        checkToken();
        interval = setInterval(checkToken, 3600000);
      }
    }

    // Limpieza del intervalo al desmontar el componente o cambiar el token
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [location]);

  if (!isValidated) {
    return <SessionExpired />;
  }

  return (
    <iframe src={iframeUrl} title="testf" width="100%" height="600px" frameBorder="0" allowFullScreen={true}></iframe>
  );
};

export default Panel;
