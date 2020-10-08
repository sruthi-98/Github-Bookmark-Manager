import React from 'react';

function SearchButton() {
    return (
        <input
            type="submit"
            value="Search"
            className="bg-orange-600 hover:bg-orange-700 font-semibold text-white md:w-2/12 m-2 p-2 rounded"
        />
    )
}

export default SearchButton;
