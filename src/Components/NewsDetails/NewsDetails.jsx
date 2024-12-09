import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const NewsDetails = () => {
    const {id,image_url,title,details}=useParams();
    console.log(id,details);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {/* main content card  */}
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 border'>
                <div className='col-span-3 border '>
                {/* middle content card  */}
                <article className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center justify-between mb-4 bg-gray-300 p-4">
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-500 hover:text-gray-700">
                            {/* <Share2 className="h-5 w-5" /> */}
                        </button>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                    {title}
                </h2>
                <img
                    src={image_url}
                    alt="News Image"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
               <p className="text-gray-700 mb-4">
                {details}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">

                        <span className="ml-4 text-gray-600 text-2xl font-semibold"></span>
                    </div>
                </div>
            </article>
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;