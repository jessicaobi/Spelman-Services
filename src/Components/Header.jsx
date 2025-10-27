import { useState } from 'react'
import logo from "../assets/spelman-college-logo.png";


function Header (){

    return (
        <div>
            <div className = "logo">
              <img src={logo} alt="codepath logo" />

            </div>

            <div className = "searchBar">
                <p>Placeholder for search bar</p>
            </div>
        </div>
    )
}

export default Header;