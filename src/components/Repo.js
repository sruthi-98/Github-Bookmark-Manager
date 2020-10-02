import React, { useState } from 'react';
import AddTitle from './AddTitle';

function Repo({ repo }) {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="flex justify-between items-center border border-solid border-gray-400 shadow-lg p-5 m-5 rounded">
            <p className="p-2">
                <strong>Repository: </strong>{repo.name}
            </p>
            <button 
                onClick={() => setShowPopup(true)}
                className="bg-purple-800 hover:bg-purple-900 font-semibold text-white h-10 py-2 px-4 rounded"
            >
                Add
            </button>
            {showPopup && <AddTitle repo={repo} />}
        </div>
    )
}

export default Repo;
