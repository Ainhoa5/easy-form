import React from 'react';

function Input(props) {
    return (
        <input
            className="w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline bg-slate-200"
            {...props}
        />
    );
}

export default Input;
