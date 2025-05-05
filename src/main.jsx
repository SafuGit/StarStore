import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layouts/Root';
import Home from './components/Home/Home';
import './index.css';
import Apps from './components/Apps/Apps';
import AuthProvider from './provider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {
        path: '/apps', 
        Component: Apps,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register
      }
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
