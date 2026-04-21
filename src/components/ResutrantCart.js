import { IMG_CDN_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const ResutrantCart = ({ id, name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">

      <Link to={"/restuarantmenu/" + id } className="restaurant-card">
      <img src= { IMG_CDN_URL  + cloudinaryImageId }  alt="Restaurant" className="card-image" />
        <h2> {name} </h2>
        <h3>{cuisines?.join(" , ")}</h3>
        <h4>{avgRating}</h4>
      </Link>
    </div>
  );
};

export default ResutrantCart;
