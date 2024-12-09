import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PribateRoute = ({children}) => {
    const {user,loader}=useContext(authContext);
    const location=useLocation();
    console.log(location);
    if(loader){
        return <div className='flex mx-auto items-center justify-center min-h-screen'><span className="loading loading-spinner loading-lg text-center"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/Register' state={location.pathname} />
};

export default PribateRoute;