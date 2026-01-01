import Title from "./Title";
import { useEffect, useState } from "react";



const Header = () => {

  const [btnNameReact ,setBtnNameReact ] = useState("Login");

  console.log("Header Render");


  useEffect(()=>{
    console.log("Use effect is called")
  },[btnNameReact])



  return (
    <div className="header">
      <Title />


        <div className="nav-items">         <ul >
          <li>Home</li>
          <li>About Us</li>
          <li>Contact </li>
          <li>Cart </li>
        </ul>
      </div>


      <button className="login-button" onClick={()=>{ setBtnNameReact( btnNameReact === "Login" ? "Logout" : "Login"  )}}>
      {btnNameReact}
      </button>
    </div>
  );
};

export default Header;
