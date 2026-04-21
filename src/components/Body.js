import React from "react";
import { useState } from "react";
import { restaurantList } from "../../utils/constant";
import ResutrantCart from "./ResutrantCart";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch("https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

   

    setAllRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setListOfRestaurant(
       json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="Search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="Search-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter((res) =>
              res?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLocaleLowerCase()),
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Search
        </button>
        <button onClick={() => setListOfRestaurant(allRestaurants)}>
          Reset
        </button>
        <button
          className="Search-btn"
          onClick={() => {
            const filterdlist = allRestaurants.filter(
              (res) => res?.info?.avgRating > 4.3,
            );
            setListOfRestaurant(filterdlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="bodyCard">
        
        {listOfRestaurant.map((restaurant) => (
          <ResutrantCart key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
