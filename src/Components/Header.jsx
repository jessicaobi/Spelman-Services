import { useState } from 'react'
import logo from "../assets/spelman-college-logo.png";


function Header ({searchTerm, searchFunction}){

    return (
        <div>
            <div className = "logo">
              <img src={logo} alt="codepath logo" />

            </div>

            <div className = "searchBar">
                <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={searchFunction}
                />
            </div>
        </div>
    )
}

export default Header;