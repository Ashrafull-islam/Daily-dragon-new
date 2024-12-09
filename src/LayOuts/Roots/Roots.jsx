import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const Roots = () => {
    return (
        <div className='poppins-thin max-w-7xl mx-auto my-20'>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;