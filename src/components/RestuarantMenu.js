import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MENU_TYPE = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
  try {
    const response = await fetch(
      "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurantMenu/" + id
    );
    const json = await response.json();

    console.log("Full JSON:", json);

    // Restaurant info - cards[2]
    const info = json?.data?.cards[2]?.card?.card?.info;
    setResInfo(info);

    // Menu categories - cards[4]
    const cards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const MENU_TYPE =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

    const categories = cards?.filter(
      (c) => c?.card?.card?.["@type"] === MENU_TYPE
    );

    const allItems = categories?.flatMap(
      (category) =>
        category?.card?.card?.itemCards?.map((item) => item?.card?.info) || []
    );

    console.log("Menu Items:", allItems);
    setMenuItems(allItems || []);

  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};
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