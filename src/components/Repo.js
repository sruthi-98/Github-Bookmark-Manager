import React, { useState, useRef } from 'react';
import { useBookmarkValue } from '../BookmarkContext';
import AddRepoButton from './AddRepoButton';
import Popup from './Popup';

function Repo({ repo }) {
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState('');
    const titleRef = useRef('')

    const [ { bookmarks }, dispatch] = useBookmarkValue();
    
    const addRepo = (repo) => {
        setShowPopup(false);
        dispatch({
            type: 'ADD_BOOKMARK',
            item: {
                id: repo.id,
                repo_name: repo.name,
                title: title,
                desc: repo.description,
                url: repo.html_url
            }
        });
    }

    const updateTitle = () => {
        setTitle(titleRef.current.value);
    }

    const isAdded = (id) => {
        return bookmarks.some(item => item.id === id);
    }

    const addClickHandler = () => {
        setShowPopup(true)
    }

    return (
        <div>
            <div className="block md:flex justify-between items-center border border-solid border-gray-400 shadow-lg p-5 m-5 rounded">
                <div className="flex flex-col p-2">
                    <p><strong>{repo.name}</strong></p>
                    {repo.description && <p className="pt-1 pr-2 pb-2 text-sm text-gray-800">{repo.description}</p>}
                </div>
                <AddRepoButton id={repo.id} clickHandler={addClickHandler} isAdded={isAdded} />
            </div>

            {/* Shows a popup to enter a title for the selected bookmark */}
            {showPopup && <Popup repo={repo} titleRef={titleRef} changeHandler={updateTitle} addRepo={addRepo} />}
        </div>
    )
}

export default Repo;
