import React, { useState } from 'react';
import axios from '../axios';

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("users");

    const findSearchType = () => {
        const dropdown = document.getElementsByClassName('search__dropdown')[0]
        setSearchType(dropdown.value);
    }

    const fetchResult = () => {
        
        switch (searchType) {
            case 'users':
                axios({
                    url: '/search/users?q=' + searchValue + '&per_page=20',
                }).then((result) => console.log(result))
                  .catch(error => console.log(error));
                break;

            case 'repo':
                axios({
                    url: '/search/repositories?q=' + searchValue + '&per_page=20',
                }).then((result) => console.log(result))
                  .catch(error => console.log(error));
                break;
        
            default:
                break;
        }
    }

    console.log(searchType);

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

                <select className="search__dropdown" onChange={findSearchType}>
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
