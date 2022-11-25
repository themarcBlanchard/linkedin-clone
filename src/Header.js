import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return(
        <div className="header">
            <div className="header--left">
                {/* Logo */}
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" />
                <div className="header--left__search">
                    <SearchIcon />
                    {/* Search Icon */}
                    <input type="text" />
                </div>
            </div>
            <div className="header--right">
                {/* Header Right */}
            </div>
        </div>
    )
}

export default Header