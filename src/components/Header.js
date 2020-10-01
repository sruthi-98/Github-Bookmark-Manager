import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="bg-indigo-900 h-auto p-5">
            <Link to="/">
                <h3 className="text-white text-3xl tracking-wide uppercase">
                    Bookmark Manager
                </h3>
            </Link>
        </div>
    )
}

export default Header;
