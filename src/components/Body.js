import RestaurantCard from "./ResturantCard";
import restList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // local state variable
  const [listofRestaurants, setlistofRestaurant] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newrestList = restList.filter((res) => {
              return Number(res.info.avgRating) > 4.5;
            });
            setlistofRestaurant(newrestList);
            console.log("newrestList", newrestList);
          }}
        >
          Top Rated Reasturant
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
