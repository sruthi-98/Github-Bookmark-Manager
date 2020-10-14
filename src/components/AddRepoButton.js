import React from 'react';

function AddRepoButton({ id, clickHandler, isAdded }) {
    return (
        <div>
            <button 
                onClick={clickHandler}
                className="bg-purple-800 hover:bg-purple-900 font-semibold text-white h-10 py-2 px-4 m-2 rounded"
                disabled={isAdded(id)}
            >
                {isAdded(id) ? 'Added' : 'Add'}
            </button>
        </div>
    )
}

export default AddRepoButton;
