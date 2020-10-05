import React from 'react';

function SearchBar({ searchRef }) {
    return (
        <input
            type="text"
            ref={searchRef}
            placeholder="Search"
            className="block w-full md:flex-auto border border-solid border-gray-500 placeholder-black m-2 p-2 rounded"
        />
    )
}

export default SearchBar;