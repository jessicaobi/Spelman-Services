// Header component
import logo from "../assets/spelman-college-logo.png";


function Header({ searchTerm, searchFunction }) {

    return (
        <div>
            {/* Displaying the Spelman logo */}
            <div className="logo">
                <img src={logo} alt="codepath logo" />
            </div>

            {/* Displaying the search bar with the imported searchTerm and searchFunction that was passed from App.jsx */}
            <div className="searchBar">
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