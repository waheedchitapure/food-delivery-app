
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header"

import Body from "./src/components/Body";
import Footer from "./src/components/Footer"


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





const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
