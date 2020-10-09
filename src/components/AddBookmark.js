import React from 'react';
import { useHistory } from 'react-router-dom';

function AddBookmark() {
    const history = useHistory();
    
    return (
        <div className="flex">
            <button 
                className="bg-orange-700 hover:bg-orange-800 font-semibold text-white py-2 px-5 mt-8 ml-4 rounded" 
                onClick={() => history.push('/search')}
            >
                Add new bookmark
            </button>
        </div>
    )
}

export default AddBookmark;
