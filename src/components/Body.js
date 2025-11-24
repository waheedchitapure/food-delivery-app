import React from 'react';
import { useState } from 'react';
import {restaurantList} from "../../utils/constant";
import ResutrantCart from "./ResutrantCart";


const Body = () => {
 
  const [ listOfRestaurant , SetListOfReataurant ] = useState(restaurantList);

  return (
    <>
      <div className="Serach-conatiner">
        <input type="text" className="Search-input" />
      </div>

   
        <button className="Search-btn">
            Search
        </button>

        <button className='Search-btn'  
        onClick={ () => {
          const filteredLis = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.5
          );
          SetListOfReataurant(filteredLis)
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
    