import React from 'react';
import { useState } from 'react';
import { restaurantList } from "../../utils/constant";
import ResutrantCart from "./ResutrantCart";
import { useEffect } from 'react';

import Shimmer from './Shimmer';


const Body = () => {


  const [allRestaurants, setAllRestaurants] = useState([]);
const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");




  const getResturant = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4695088&lng=73.8889779&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    
    const restaurants =
    json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(restaurants);
setListOfRestaurant(restaurants);

    
    

        // console.log(json);
  }


  useEffect(() => {


    getResturant();

  }, [])

  console.log("Body rendered")

  return allRestaurants.length === 0 ? <Shimmer /> : (
    <>

      <div className="search-container">
        <input
          type="text"
          className="Search-input"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            
            setSearchText(e.target.value);
          }}
        />
      </div>


      <button
        className="Search-btn"
        onClick={() => {
          
        const filteredReaturant =  allRestaurants.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) )

        setListOfRestaurant (filteredReaturant)

        }}
      >
        Search
      </button>

      <button className='Search-btn'
        onClick={() => {
          const filteredLis = allRestaurants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setListOfRestaurant(filteredLis)
        }}


      >

        Top Rated Restaurant
      </button>
      <div className="bodyCard">
        {listOfRestaurant.map((restaurant) => (
          <ResutrantCart key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );  
};

export default Body;
