import React from 'react';
import { useHistory } from 'react-router-dom';
import { useBookmarkValue } from '../BookmarkContext';

function Manager() {
    const history = useHistory();
    const [{ bookmark }, dispatch] = useBookmarkValue();

    return (
        <div className="bg-gray-100 h-screen p-5">
            <h5 className="text-2xl pb-2 border-b border-solid border-gray-500">
                Your Bookmark List
            </h5>

            {bookmark.length === 0 ?
                <p className="text-xl p-2">No bookmarks added !!!!</p> :
                bookmark.map(item => (
                    <div className="bg-white border border-solid border-gray-400 shadow-md p-5 m-5 rounded">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <strong>Repository: </strong>{item.repo_name}
                        </a>
                    </div>
                ))}

            <div className="flex">
                <button 
                    className="bg-indigo-700 hover:bg-indigo-800 font-semibold text-white py-2 px-4 mt-8 rounded" 
                    onClick={() => history.push('/search')}
                >
                    Add new bookmark
                </button>
            </div>
        </div>
    )
}

export default Manager;
