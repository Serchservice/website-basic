import React from 'react'
import { Link } from 'react-router-dom'
import { MainLinks } from '../../../config/custom/links'
import Images from '../../../config/images/images'

export default function HeaderSignup() {
  return (
    <div>
        <header className="header header_signup">
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <div className="logo">
                <Link to={ MainLinks.home }> <img alt="" src={ Images.serchLogo } width={30} height={30} /> </Link>
            </div>
            <div className="headerlinks" style={{color:"white"}}>
                Service made easy
            </div>
            </div>
           
        </header>
      
    </div>
  )
}
