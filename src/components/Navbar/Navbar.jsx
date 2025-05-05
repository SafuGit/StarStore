import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { NavLink } from 'react-router';

const AppNavbar = () => {
  return (
    <Navbar fluid>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/assets/appstore-logo.png" className="mr-3 h-8" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">StarStore</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className='hover:cursor-pointer'>Login</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse className='text-white'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/apps'}>Apps</NavLink>
        <NavLink to={'/profile'}>Profile</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default AppNavbar;