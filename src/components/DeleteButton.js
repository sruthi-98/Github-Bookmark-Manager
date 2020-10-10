import React from 'react';

function DeleteButton({ deleteRepo, id }) {
    return (
        <div>
            <button
                onClick={e => deleteRepo(id, e)}
                className="bg-purple-800 hover:bg-purple-900 font-semibold text-white h-10 py-2 px-4 rounded"
            >
                Delete
            </button>
        </div>
    )
}

export default DeleteButton;
