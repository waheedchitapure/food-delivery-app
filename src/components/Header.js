import Title from "./Title";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnline();



  console.log("Header Render");

  // useEffect(() => {
  //   console.log("Use effect is called");
  // }, [btnNameReact]);

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        {" "}
        <ul>
          <li>
            Online Status : { onlineStatus ? "✅" : "🔴" }
          </li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
 <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart </li>

          
        </ul>
      </div>

      <button className="login-button" 
      onClick={()=>{ setBtnNameReact (btnNameReact === "Login" ? "Logout" : "Login") }}
      >   
      {btnNameReact}

      </button>

      
    </div>
  );
};

export default Header;
