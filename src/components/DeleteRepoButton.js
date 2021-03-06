import React from 'react';

function DeleteRepoButton({ deleteRepo, id }) {
    return (
        <div>
            <button
                onClick={e => deleteRepo(id, e)}
                className="bg-purple-800 hover:bg-purple-900 font-semibold text-white h-10 py-2 px-4 mt-2 ml-2 rounded"
            >
                Delete
            </button>
        </div>
    )
}

export default DeleteRepoButton;
