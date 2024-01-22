import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams(); 
    const [showIndex, setShowIndex] = useState(null); 
    const resInfo = useRestaurantMenu(resId); 

    if(resInfo === null || resInfo === undefined){
        return <Shimmer></Shimmer>
    }

    const menuList = resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const categories = resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return (c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
    }); 

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo.data.data.cards[0].card.card.info.name}</h1>
            <p className="font-bold text-xl">
                {resInfo.data.data.cards[0].card.card.info.cuisines.join(", ")} - {resInfo.data.data.cards[0].card.card.info.costForTwoMessage}
            </p>
            {
                categories.map((category, index) => {
                    return <RestaurantCategory key={index} data={category.card.card}
                        showItems={
                            (index === showIndex) ? true : false
                        }
                        setShowIndex={() => setShowIndex(index)}
                        setShowIndexNull = {() => {setShowIndex(null)}}

                    ></RestaurantCategory>
                })
            }

        </div>
    ); 
}; 

export default RestaurantMenu; 