import React, { useState } from 'react';
import { SideBar } from './SideBar';
import { Link, Outlet} from 'react-router-dom';
import "./profile.css";
import '../../../css/index.css';
import { AppLinks, MainLinks} from "../../../config/custom/links";
import Images from '../../../config/images/images';
import { FcSettings } from "react-icons/fc"
import profilephoto2 from "../../../assets/profilepage/profilephoto2.svg";
import arrow from "../../../assets/profilepage/arrow.svg";
import { ProfileWrapper } from './ProfileWrapper';
// import Images from '../config/images/images';
import classnames from 'classnames';
import ProfileIcons from './ProfileIcons';


export default function Profile({selected}) {

    const  [activeIndex, setActiveIndex] = useState(0);


    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      }

    return (
        <div className="profile">
            
         <div className='profile-nav-container'>
        
            <header className="header header_icons">
            <div className="logo">
                <Link to={ MainLinks.home }> <img alt="" src={ Images.serchLogo } width={30} height={30} /> </Link>
            </div>
            
             </header>
        
            <ProfileIcons/>

   
         <div className="header footer_icons" style={{marginTop: "-50%", paddingTop: "-50%",display:"flex", flexDirection:"column", gap:"15px"}}>
            <div className="logo footer_icon">
            <img src={profilephoto2} width={50} height={50} alt="profilephoto"/>
            </div>
            <div className="logo footer_icon">
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
