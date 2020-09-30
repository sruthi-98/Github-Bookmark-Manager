import React from 'react';

function Search() {
    return (
        <div className="search">
            <div className="search__container">
                <input
                    type="text"
                    placeholder="Search"
                    className="search__searchBar"
                />

                <button className="search__searchButton">Search</button>
            </div>
        </div>
    )
}

export default Search;
