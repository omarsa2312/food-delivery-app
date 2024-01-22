import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, setShowIndexNull}) => {
     

    const handleClick = () => {
        if(showItems == false) setShowIndex();
        else setShowIndexNull();  
    }; 

    return (
        <div>
            <div className="bg-green-100 w-6/12 mx-auto p-4 my-4 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    {
                        showItems ? <span>🔼</span> : <span>🔽</span>
                    }
                </div>
                {
                    showItems ? <ItemList items={data.itemCards}></ItemList> : <></>
                }
            </div>
        </div>
    ); 

}; 

export default RestaurantCategory; 