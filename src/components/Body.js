import React from "react";
import { useState } from "react";
import { restaurantList } from "../../utils/constant";
import ResutrantCart from "./ResutrantCart";
import { useEffect }  from "react";

const Body = () => {
  const [listOfRestaurant, SetListOfReataurant] = useState(restaurantList);

  const [title, setTitle] = useState("Hi");

  const [Searchtitle, setSearchtitle] = useState("This is live dynamic ");


  useEffect(()=>{

getresturants();


  },[]);


  async function getresturants() {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);

    SetListOfReataurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  return (
    <>
      <div className="Serach-conatiner">
        <input type="text" className="Search-input" />
      </div>

      <h1>{title}</h1>

      <h2>{Searchtitle}</h2>
       <input
        type="text"
        className="Search-tetx-update-live"
        placeholder="Type something..."
        onChange={(e)=>setSearchtitle(e.target.value) }
      />

      <button
        onClick={() =>
          setTitle((pre) => (pre === "Hi" ? "New Title Aaa gaya" : "Hi" ))
        }
      >
        Title Changes
      </button>

     

      <button className="Search-btn">Search</button>

      <button
        className="Search-btn"
        onClick={() => {
          const filteredLis = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.5
          );
          SetListOfReataurant(filteredLis);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="bodyCard">
        {listOfRestaurant.map((restaurant) => (
          <ResutrantCart key={restaurant?.info?.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
