import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h3>Github Bookmark Manager</h3>
            </Link>
        </div>
    )
}

export default Header;
