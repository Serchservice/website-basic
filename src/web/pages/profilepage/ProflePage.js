import { Button } from "../../../component/styled";
import { Title } from "../../../config/custom/titleheader";

// import profilephoto from "../../../assets/profilepage/profilephoto.svg";

export const ProfileDashboard = ()=>{
    Title("Serch || Profile Home");
    return(
       
            <div className="profile_dashboard">
                <div className="profile_photo">
                    {/* <img src={profilephoto} alt="profile photo"/> */}
                 <div>
                 <h3>John Doe</h3>
                 <h4>Plumber</h4>
                 </div>
                </div>
                <div className="profile_button">
                    <Button type='submit'>Edit</Button>
                  </div>
            </div>
        
    )
    
};
export const ProfileChat = ()=>{
    Title("Serch || Profile Chat");
    return(
        <div>
            profile chat
        </div>
    )
    
};
export const ProfileCall = ()=>{
    Title("Serch || Profile Call");
    return(
        <div>
            profile call
        </div>
    )
    
};
export const ProfileSetting = ()=>{
    Title("Serch || Profile Settings");
    return(
        <div>
            profile setting
        </div>
    )
    
};
export const ProfileProfile= ()=>{
    Title("Serch || Profile page");
    return(
        <div>
            profile profile
        </div>
    )
    
};