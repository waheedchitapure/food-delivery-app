
export const Title = () => {
    return (
      <>
        <img
          src="https://foodvilla.ng/wp-content/uploads/2020/12/FOOD_VILLA-removebg-preview.png"
          alt="LOGO"
          className="logo"
        />
      </>
    );
  };
  



  const Header = () => {
    return (
      <div className="header">
        <Title />
       
  
        <div className="nav-items">
          <ul >
            <li>Home</li>
            <li>About Us</li>
            <li>Contact </li>
            <li>Cart </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  