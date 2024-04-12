import axios from 'axios';

const verifyToken = async (token) => {
    try {
        const response = await axios.get('http://localhost:3001/islas/verify-token', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data.isValid;
    } catch (error) {
        console.error('Error al verificar el token', error);
        return false; 
    }
};

export { verifyToken };
