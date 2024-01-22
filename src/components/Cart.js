import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch(); 

    const handleClick = () => {
        dispatch(clearCart()); 
    }

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button onClick={handleClick} className="p-2 m-2 bg-black text-white rounded-lg">Clear Cart</button>
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    ); 
}

export default Cart; 