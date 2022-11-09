import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../componants/Contex/AuthProvidor';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContex)
    const location = useLocation();

    if (loading) {
        return <div>loading....</div>
    }
    if (!user) {
        <Navigate></Navigate>
    }
};

export default PrivateRoute;