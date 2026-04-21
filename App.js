import React from "react";
import ReactDom from "react-dom/client";



import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header";

import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import RestuarantMenu from "./src/components/RestuarantMenu"  
/*
* Header
* Body
* Footer

    * Header
        - Logo (Left side)
        - list items Navbar (Right side)
        - Cart

    * Body 
        - searchbar
        - Resutrant List 
            - ResutrantCart
                - Image
                - Name
                - Rating 
                - cusin
    
                
    * Footer
        - Links
        - Copyrights                     

*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
       {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/restuarantmenu/:id",
        element: <RestuarantMenu />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
