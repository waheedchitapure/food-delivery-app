import React from "react";
import { useState } from "react";
import { restaurantList } from "../../utils/constant";
import ResutrantCart from "./ResutrantCart";
import { useEffect } from "react";

import { SWIGGY_API } from "../../utils/constant";

const Body = () => {
  const [listOfRestaurant, setListOfReataurant] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const [title, setTitle] = useState("Hi");
  // const [Searchtitle, setSearchtitle] = useState("This is live dynamic ");

  useEffect(() => {
    getresturants();
  }, []);

  const getresturants = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    console.log(json);

    setListOfReataurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(
    "Body is render If  i write anything in search every time body is render"
  );

  return  filteredResturants.length === 0 ? <h1>Loading....</h1> : (
    <>
      <div className="seacr-conatiner">
        <input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="Search-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredList);
            setFilteredResturants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      {/* <h1>{title}</h1>

      <h2>{Searchtitle}</h2>
      <input
        type="text"
        className="Search-tetx-update-live"
        placeholder="Type something..."
        onChange={(e) => setSearchtitle(e.target.value)}
      />

      <button
        onClick={() =>
          setTitle((pre) => (pre === "Hi" ? "New Title Aaa gaya" : "Hi"))
        }
      >
        Title Changes
      </button> */}

      {/* <button
        className="Search-btn"
        onClick={() => {
          const filteredLis = filteredResturants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setFilteredResturants(filteredLis);
        }}
      >
        Top Rated Restaurant
      </button> */}
      <div className="bodyCard">
        {filteredResturants.map((restaurant) => (
          <ResutrantCart key={restaurant?.info?.id} {...restaurant.info} />
          
        ))
        }
        {console.log("filteredResturants MAP wala all cards show karn keliye ")}
        {console.log(filteredResturants)}
        
      </div>
      
    </>
  );
};

export default Body;
