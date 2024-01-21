import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    // resList2 = JS variable 
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); 
    
    useEffect(()=>{
        fetchData(); 
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(
            SWIGGY_URL
        );
        const json = await data.json(); 

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus(); 

    if(onlineStatus === false){
        return (<h1>Oops! Seems like your internet connection is down. Please check your internet connection</h1>);
    }

    if(listOfRestaurants.length === 0){
        return (
        <div className="shimmer">
            <button className="filter-btn">Top Rated Restaurants</button>
            <Shimmer> </Shimmer>
        </div>
        );
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}  type="text" className="search-box"></input>
                    <button onClick={()=>{
                        const filteredList = listOfRestaurants.filter((rest)=>{
                            return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredListOfRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    filteredList = listOfRestaurants.filter((res, index)=>{
                        return res.info.avgRating > 4; 
                    });
                    setfilteredListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredListOfRestaurants.map((rest) => {
                        return (
                            <Link key = {rest.info.id} to = {`/restaurants/${rest.info.id}`}>
                                <RestaurantCard resData = {rest}></RestaurantCard>
                            </Link>
                        );
                    })
                }


            </div>
        </div>
    );
};

export default Body; 