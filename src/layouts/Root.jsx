import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import AppNavbar from '../components/Navbar/Navbar';
import AppFooter from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

const Root = () => {
  const location = useLocation();
  const {state} = useNavigation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Apps - StarStore',
      '/login': 'Login - StarStore',
      '/register': 'Register - StarStore',
      '/apps/detail': 'App Detail - StarStore',
      '/profile': 'Profile - StarStore'
    }
    document.title = routeTitles[location.pathname] || 'StarStore';
  }, [location.pathname]);
  return (
    <>
      <AppNavbar></AppNavbar>
      {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
      <AppFooter></AppFooter>
    </>
  );
};
export default Root;