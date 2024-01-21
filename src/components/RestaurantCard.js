import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props; 
    const {name, avgRating,cloudinaryImageId} = resData?.info; 
    const {deliveryTime} = resData?.info?.sla;

    return (
        <div className="m-2 p-4 bg-green-100 rounded-lg w-[300px] shadow-lg hover:bg-green-200">
            <img className="rounded-lg" src = {CDN_URL
            +cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-black text-white rounded-lg absolute mx-2 p-2 ">High Rating</label>
                <RestaurantCard {...props}></RestaurantCard>
            </div>
        );
    };
}

export default RestaurantCard; 