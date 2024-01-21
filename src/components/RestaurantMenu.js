import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams(); 
    
    const resInfo = useRestaurantMenu(resId); 

    if(resInfo === null || resInfo === undefined){
        return <Shimmer></Shimmer>
    }

    const menuList = resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    
    return(
        <div className="menu">
            <h1>{resInfo.data.data.cards[0].card.card.info.name}</h1>
            <p>
                {resInfo.data.data.cards[0].card.card.info.cuisines.join(", ")} - {resInfo.data.data.cards[0].card.card.info.costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {
                    menuList.map((item) => {
                        return (<li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.price/100}</li>);
                    })
                }
            </ul>

        </div>
    ); 
}; 

export default RestaurantMenu; 