import React from 'react';
import { useState } from 'react';
import { restaurantList } from "../../Config";
import ResutrantCart from "./ResutrantCart";


// const BurgerKing ={

//   cuisines : ["Burger , American"],
//   rating : "4.5 star",
// }

const Body = () => {

    const [SearchText , setSearchText ] = useState("");

  return (
    <>
      <div className="Serach-conatiner">
        <input type="text" value={SearchText}  onChange={(e) => setSearchText(e.target.value)} className="Search-input" />
      </div>

      
        <button className="Search-btn">
            Search {SearchText}
        </button>
      
      <div className="bodyCard">
        {restaurantList.map((restaurant) => {
          return (
            <ResutrantCart key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
   