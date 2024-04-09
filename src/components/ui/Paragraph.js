import React from 'react';

function Paragraph({ children }) {
    return (
        <p className="text-gray-800">
            {children}
        </p>
    );
}

export default Paragraph;
