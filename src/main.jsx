import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layouts/Root';
import Home from './components/Home/Home';
import './index.css';
import Apps from './components/Apps/Apps';
import AuthProvider from './provider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './provider/PrivateRoute';
import Categories from './components/Categories/Categories';
import EducationCategory from './components/Categories/EducationCategory';
import GamingCategory from './components/Categories/GamingCategory';
import ProductivityCategory from './components/Categories/ProductivityCategory';
import AppDetails from './components/AppDetails/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, 
        Component: Apps,
        loader: () => fetch('/data.json'),
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
        }
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
