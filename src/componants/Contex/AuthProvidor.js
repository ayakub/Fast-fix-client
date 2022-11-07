import React, { createContext } from 'react';
const AuthContex = createContext();
const AuthProvidor = ({ children }) => {
    return (
        <AuthContex.Provider>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvidor;