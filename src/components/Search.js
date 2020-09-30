import React, { useState } from 'react';
import axios from '../axios';

function Search() {
    const [searchValue, setSearchValue] = useState("");

    const fetchResult = () => {
        console.log("Fetch results");
    }

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
                    <option value="users">{searchValue} in Users</option> 
                    <option value="repo">{searchValue} in Repositories</option>
                </select>

                <button 
                    className="search__searchButton"
                    onClick={fetchResult}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search;
