import React, { useState, useRef } from 'react';
import { useBookmarkValue } from '../BookmarkContext';
import Popup from './Popup';

function Repo({ repo }) {
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState('');
    const titleRef = useRef('')

    const [, dispatch] = useBookmarkValue();
    
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

    const updateTitle = () => {
        setTitle(titleRef.current.value);
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
            {showPopup && <Popup repo={repo} titleRef={titleRef} changeHandler={updateTitle} addRepo={addRepo} />}
        </div>
    )
}

export default Repo;
