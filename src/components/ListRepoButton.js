import React from 'react';

function ListRepoButton({ clickHandler, clicked, login }) {
    return (
        <div>
             <button 
                onClick={clickHandler}
                className="bg-transparent border border-solid border-purple-800 font-semibold text-indigo-800 p-2 rounded hover:shadow-lg"
            >
                {!clicked ? 'View' : 'Hide'} <strong>{login}</strong>'s repository list
            </button>
        </div>
    )
}

export default ListRepoButton;
