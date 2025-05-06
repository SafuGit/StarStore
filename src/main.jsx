import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layouts/Root';
import './index.css';
import Apps from './components/Apps/Apps';
import AuthProvider from './provider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './provider/PrivateRoute';
import AppDetails from './components/AppDetails/AppDetails';
import NotFound from './components/NotFound/NotFound';
import Loading from './components/Loading/Loading';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, 
        Component: Apps,
        loader: () => fetch('/data.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/apps/detail/:id',
        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
        loader: async ({params}) => {
          const data = await fetch(`/data.json`)
            .then(res => res.json())
            .then(data => data.find(app => app.id === params.id))
          return data;
        },
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        )
      }
    ],
  },
  {
    path: '*',
    Component: NotFound,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
