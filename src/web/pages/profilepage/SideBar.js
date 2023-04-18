import { FaHome } from "react-icons/fa"
import { BsChatDotsFill } from "react-icons/bs"
import { BiPhoneCall } from "react-icons/bi"
import { FcSettings } from "react-icons/fc"
import { CgProfile} from "react-icons/cg"
import "./profile.css";
import profile from "../../../assets/profilepage/profile.svg";
import profilecall from "../../../assets/profilepage/profilecall.svg";
import profilechat from "../../../assets/profilepage/profilechat.png";
import profilesetting from "../../../assets/profilepage/profilesetting.svg";
import profilehome from "../../../assets/profilepage/profilehome.svg";


export const SideBar = [

      
    {
        title:"Chat",
        path:"/profile",
        // icon:<BsChatDotsFill/>,
        icon:<img className="profile-icons" src={profile}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Chat",
        path:"/profile/profilechat",
        // icon:<BsChatDotsFill/>,
        icon:<img className="profile-icons" src={profilechat}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Call",
        path:"/profile/profilecall",
        // icon:<BiPhoneCall/>,
        icon:<img className="profile-icons" src={profilecall}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Settings",
        path:"/profile/profilesetting",
        // icon:<FcSettings/>,
        icon:<img className="profile-icons" src={profilesetting}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Settings",
        path:"/profile/profilehome",
        // icon:<CgProfile/>,
        icon:<img className="profile-icons" src={profilehome}/>,

        cName:"profile-nav-item"

    }

]
