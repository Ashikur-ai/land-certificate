import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import RS from './components/RS/RS.jsx';
import PrivateRoute from './Routes/privateRoute.jsx';
import OyarisSonod from './components/OyarisSonod/OyarisSonod.jsx';
import ReferenceDolil from './components/ReferenceDolil/ReferenceDolil.jsx';
import MainDolil from './components/MainDolil/MainDolil.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Namjari from './pages/Namjari.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/rs-kotiyan',
        element: <PrivateRoute>
          <RS></RS>
        </PrivateRoute>
      },
      {
        path: '/oyarisSonod',
        element: <PrivateRoute>
          <OyarisSonod></OyarisSonod>
        </PrivateRoute>
      },
      {
        path: '/referenceDolil',
        element: <PrivateRoute>
          <ReferenceDolil></ReferenceDolil>
        </PrivateRoute>
      },
      {
        path: '/mainDolil',
        element: <PrivateRoute>
          <MainDolil></MainDolil>
        </PrivateRoute>
      },
      {
        path: '/namjari',
        element: <PrivateRoute>
          <Namjari></Namjari>
        </PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
    
  </React.StrictMode>,
)
