import React from 'react';
import { useHistory } from 'react-router-dom';
import { useBookmarkValue } from '../BookmarkContext';

function Manager() {
    const history = useHistory();
    const [{ bookmark }, dispatch] = useBookmarkValue();

    return (
        <div className="h-auto m-10">
            <h5 className="text-2xl pb-2 border-b border-solid border-gray-500">
                Your Bookmark List
            </h5>

            {bookmark.length === 0 ?
                <p className="text-xl p-2 mt-4">No bookmarks added !!!!</p> :
                bookmark.map((item, i) => (
                    <div key={i} className="bg-white border border-solid border-gray-400 shadow-md p-5 m-5 rounded">
                        {item.title !== '' && <p><strong>Title: </strong>{item.title}</p>}
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <strong>Repository: </strong>{item.repo_name}
                        </a>
                    </div>
                ))}

            <div className="flex">
                <button 
                    className="bg-orange-600 hover:bg-orange-700 font-semibold text-white py-2 px-5 mt-8 ml-4 rounded" 
                    onClick={() => history.push('/search')}
                >
                    Add new bookmark
                </button>
            </div>
        </div>
    )
}

export default Manager;
