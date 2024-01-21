import { useEffect, useState } from "react";
import axios from "axios";
const User = () => {
    const [userInfo, setUserInfo] = useState(null); 

    const fetchUserData = async () => {
        const response = await axios.get('https://api.github.com/users/akshaymarch7'); 
        console.log(response); 
        setUserInfo(response); 
    }

    useEffect(()=>{
        fetchUserData(); 
    }, []); 

    if(userInfo === null){
        return <></>
    }
    return (
        <div className="user-card">
            <h2>Om Tiwari</h2>
            <h3>Gurgaon</h3>
            <h3>Contact: @om.tiwari.ug20@nsut.ac.in</h3>

        </div>
    );
}; 

export default User; 