import React, { useState } from 'react';
import { useBookmarkValue } from '../BookmarkContext';

function Repo({ repo }) {
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState('');

    const [{ bookmark }, dispatch] = useBookmarkValue();
    
    const addRepo = (repo) => {
        setShowPopup(false);
        dispatch({
            type: 'ADD_BOOKMARK',
            item: {
                id: repo.id,
                repo_name: repo.name,
                title: title,
                url: repo.html_url
            }
        });
    }

    return (
        <div>
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
            </div>

            {/* Shows a popup to enter a title for the selected bookmark */}
            {showPopup && 
                <div className="fixed z-10 h-screen w-screen bg-black bg-opacity-75 top-0 left-0">
                    <div className="popup absolute flex flex-col bg-orange-100 h-auto w-3/5 lg:w-1/4 border border-solid border-black p-12">
                        <p className="flex text-lg">Enter a title (optional):</p>
                        <input 
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            className="block w-full md:flex-auto border border-solid border-gray-500 placeholder-black p-2 mb-4 rounded"
                        />
                        <button 
                            onClick={e => addRepo(repo, e)}
                            className="bg-orange-600 hover:bg-orange-700 font-semibold text-white py-2 px-5 rounded" 
                        >
                            Save
                        </button>
                    </div>
                </div>}
        </div>
    )
}

export default Repo;
