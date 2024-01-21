import { useState, useEffect } from "react";
import axios from "axios";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null); 
    const fetchMenu = async () => {
        const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4894154&lng=77.01186960000001&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        setResInfo(response);
    }

    useEffect(()=>{
        fetchMenu(); 
    },[])
    return resInfo; 
}; 

export default useRestaurantMenu; 
