import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import AppNavbar from '../components/Navbar/Navbar';
import AppFooter from '../components/Footer/Footer';

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Apps - StarStore',
      '/login': 'Login - StarStore',
      '/register': 'Register - StarStore',
      '/apps/detail': 'App Detail - StarStore',
    }
    document.title = routeTitles[location.pathname] || 'StarStore';
  }, [location.pathname]);
  return (
    <>
      <AppNavbar></AppNavbar>
      <Outlet></Outlet>
      <AppFooter></AppFooter>
    </>
  );
};
export default Root;