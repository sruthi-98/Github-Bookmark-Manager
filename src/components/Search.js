import React, { useState } from 'react';

function Search() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="search">
            <div className="search__container">
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Search"
                    className="search__searchBar"
                    onChange={e => setSearchValue(e.target.value)}
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
