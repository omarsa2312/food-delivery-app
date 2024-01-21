import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus(); 

    return (
        <div className = "header">
            <div className="logo-container">
                <img src= {LOGO_URL} className="logo"></img>

            </div>
            <div className="nav-items">
                <ul>
                    <li>{(onlineStatus === true) ? 'Online 🟢' : 'Offline 🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        if(btnName === "Login"){
                            setBtnName("Logout");
                        }else{
                            setBtnName("Login");

                        }
                    }}> {btnName} </button>
                </ul>
            </div>


        </div>
    );
};

export default Header; 