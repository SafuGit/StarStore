import React from 'react';
import './NotFound.css';
import AppNavbar from '../Navbar/Navbar';

const NotFound = () => {
  return (
    <div>
      <AppNavbar></AppNavbar>
      <h1 className='text-5xl text-center font-bold mb-8'>Page Not Found</h1>
      <div className='w-[98vw] flex justify-center items-center'>
        <img className='notfound-img w-110 rounded-lg' src="https://cdn.pixabay.com/photo/2024/07/20/17/12/warning-8908707_1280.png" alt="" />
      </div>
    </div>
  );
};

export default NotFound;