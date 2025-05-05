import React from 'react';
import { Outlet } from 'react-router';
import AppNavbar from '../components/Navbar/Navbar';
import AppFooter from '../components/Footer/Footer';

const Root = () => {
  return (
    <>
      <AppNavbar></AppNavbar>
      <Outlet></Outlet>
      <AppFooter></AppFooter>
    </>
  );
};
export default Root;