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

                <select className="search__dropdown">
                    <option value="users">in Users</option> 
                    <option value="repo">in Repositories</option>
                </select>

                <button className="search__searchButton">Search</button>
            </div>
        </div>
    )
}

export default Search;
