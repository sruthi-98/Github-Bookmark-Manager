import React from 'react';

function SearchBar({ onChange }) {
    return (
        <input
            type="text"
            id="searchBar"
            placeholder="Search"
            onChange={onChange}
            className={`block w-full md:flex-auto border border-solid border-gray-500 placeholder-black m-2 p-2 rounded`}
            required={true}
        />
    )
}

export default SearchBar;
