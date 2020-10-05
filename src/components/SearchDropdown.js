import React from 'react';

function SearchDropdown() {
    return (
        <select className="search__dropdown block w-full md:flex-auto bg-gray-200 border border-gray-200 text-gray-700 m-2 p-2"> 
            <option value="users">in Users</option> 
            <option value="repo">in Repositories</option>
        </select>
    )
}

export default SearchDropdown;
