import { useEffect, useState } from "react";

const useResturant = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurantMenu/" + id
      );
      const json = await response.json();

      const info = json?.data?.cards[2]?.card?.card?.info;
      setResInfo(info);

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

      setMenuItems(allItems || []);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return { resInfo, menuItems }; // ✅ correct return
};

export default useResturant;