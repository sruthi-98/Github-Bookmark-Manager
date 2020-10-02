import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className=" bg-black h-auto p-5">
            <Link to="/">
                <h3 className="text-white text-3xl tracking-widest font-mono uppercase ml-5">
                    Bookmark Manager
                </h3>
            </Link>
        </div>
    )
}

export default Header;
