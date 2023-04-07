import React, { useState } from 'react';
import { SideBar } from './SideBar';
import { Link, Outlet } from 'react-router-dom';
import "./profile.css";
import '../../../css/index.css';
import { AppLinks, MainLinks} from "../../../config/custom/links";
import Images from '../../../config/images/images';
import { FcSettings } from "react-icons/fc"
import profilephoto2 from "../../../assets/profilepage/profilephoto2.svg";
import arrow from "../../../assets/profilepage/arrow.svg";

// import Images from '../config/images/images';


export default function Profile({selected}) {

    const  [isActive, setIActive] = useState(null)
    
    return (
        <div className="profile">
         <div className='profile-nav-container'>
         <header className="header">
            <div className="logo">
                <Link to={ MainLinks.home }> <img alt="" src={ Images.serchLogo } width={30} height={30} /> </Link>
            </div>
            {/* <div className="headerlinks">
                <Link to={ AppLinks.loginUser }>Login</Link>
                <Link to={ AppLinks.signupUser }>Signup</Link>
            </div> */}
        </header>
         <div className="profile-nav">
            {SideBar.map((item, index) =>{
                return (
                <li key={index} className={`${item.cName} ${isActive === item && " active_item active-icon" } `}
                onClick={() => {
                    setIActive(item);
                    
                }}>
                    <Link to={item.path} className={`"profile-item" `}>
                      {item.icon}
                        <span>Icon</span>
                    </Link>
                </li>
                    )
            })}

         </div>
         <div className="header" style={{display:"flex", flexDirection:"column", gap:"15px"}}>
            <div className="logo">
            <img src={profilephoto2} width={50} height={50} alt="profilephoto"/>
            </div>
            <div className="logo">
            <img src={arrow} alt="arrow"/>
               
            </div>
           
        </div>
         </div>
         <div className='profile-display'>
           
            <Outlet/>
         </div>

        </div>
    )
}
