import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Blog from './About';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Store from './Store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/About',
    element: <Blog />,
  },
  {
    path: '/Store',
    element: <Store />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
