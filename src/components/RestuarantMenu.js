import { useParams } from "react-router-dom";
import useResturant from "../../utils/useResturant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const { resInfo, menuItems } = useResturant(id); // ✅ use hook data
  

// alert("Loading started");
// alert("Loading ended");


  if (!resInfo) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{resInfo.name}</h1>
      <p>{resInfo.cuisines.join(", ")}</p>
      <p>⭐ {resInfo.avgRatingString}</p>
      <p>🕐 {resInfo.sla?.slaString}</p>
      <p>{resInfo.costForTwoMessage}</p>

      <h2>Menu</h2>

      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>₹ {(item.price || item.defaultPrice) / 100}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;  