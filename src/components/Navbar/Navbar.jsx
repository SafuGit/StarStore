import React, { use } from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AppNavbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: "Succesfully Logged Out!",
        })
      }).catch((error ) => {
        Swal.fire({
          icon: 'error',
          title: error.message,
        })
      })
  }
  return (
    <Navbar fluid className='mb-15'>
      <NavbarBrand href="#">
        <img src="/assets/appstore-logo.png" className="mr-3 h-8" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">StarStore</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {user ? <div className="avatar">
          <div className="rounded-full w-10 max-[400px]:!hidden mr-2">
            <img src={user.photoURL} />
          </div>
        </div> : ""}
        {user ? <button onClick={handleLogout} className='btn bg-red-600 mr-2 md:mr-0'>LogOut</button> : <Link className='hover:cursor-pointer btn bg-blue-600 mr-2 md:mr-0' to={'/login'}>Login</Link>}
        <NavbarToggle />
      </div>
      <NavbarCollapse className='text-white'>
        <NavLink to={'/'} className={'text-lg'}>Apps</NavLink>
        <NavLink to={'/profile'} className={'text-lg'}>Profile</NavLink>
        <NavbarLink className='!block min-[400px]:!hidden'>
          {user ? <div className="avatar">
            <div className="rounded-full w-10 mr-2">
              <img src={user.photoURL} />
            </div>
          </div> : ""}
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default AppNavbar;