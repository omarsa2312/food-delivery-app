import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus(); 

    const {loggedInUser} = useContext(UserContext); 

    // Subscribing to the store
    // Subscribing to small portion of store(i.e. items)
    const cartItems = useSelector((store) => store.cart.items); 



    return (
        <div className = "flex justify-between shadow-lg bg-green-100">
            <div>
                <img className="w-32 h-24" src={LOGO_URL}></img>

            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-2">{(onlineStatus === true) ? 'Online 🟢' : 'Offline 🔴'}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact us</Link></li>
                    <Link to = "/cart"><li className="px-2 font-bold text-xl">Cart ({cartItems.length} items)</li></Link>
                    <button className="login-btn" onClick={()=>{
                        if(btnName === "Login"){
                            setBtnName("Logout");
                        }else{
                            setBtnName("Login");

                        }
                    }}> {btnName} </button>
                    <li className="px-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>


        </div>
    );
};

export default Header; 