// import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import About from './pages/home/sections/About';
import Products from './pages/home/sections/Products';
import Innovator from './pages/home/sections/Innovator';
import Contact from './pages/home/sections/Contact';
import Hero from './pages/home/sections/Hero';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "products", element: <Products /> },
        { path: "innovator", element: <Innovator /> },
        { path: "contact", element: <Contact /> },
        { path: "hero", element: <Hero /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
