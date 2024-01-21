import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
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

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); 


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
            <Shimmer> </Shimmer>
        </div>
        );
    }
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}  type="text" className="search-box border border-solid border-black"></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filteredList = listOfRestaurants.filter((rest)=>{
                            return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredListOfRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <div className="search m-2 p-4 flex items-center">
                <button className="bg-green-100 px-4 py-2 rounded-lg" onClick={()=>{
                    filteredList = listOfRestaurants.filter((res, index)=>{
                        return res.info.avgRating > 4.2; 
                    });
                    setfilteredListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredListOfRestaurants.map((rest) => {
                        
                        return (
                            <Link key = {rest.info.id} to = {`/restaurants/${rest.info.id}`}>
                                {
                                    rest.info.avgRating > 4.2 ? <RestaurantCardPromoted resData={rest}></RestaurantCardPromoted> : <RestaurantCard resData = {rest}></RestaurantCard>
                                }
                            </Link>
                        );
                    })
                }


            </div>
        </div>
    );
};

export default Body; 