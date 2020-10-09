import React from 'react';
import { useBookmarkValue } from '../BookmarkContext';

function Bookmark({ bookmark }) {
    const [, dispatch] = useBookmarkValue();

    const deleteRepo = (id) => {
        dispatch({
            type: 'DELETE_BOOKMARK',
            id: id
        });
    }

    return (
        <div key={bookmark.id} className="flex justify-between bookmarks-center bg-white border border-solid border-gray-400 shadow-md p-5 m-5 rounded">
            <div className="flex flex-col">
                {bookmark.title !== '' && <p><strong>Title: </strong>{bookmark.title}</p>}
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                    <strong>Repository: </strong>{bookmark.repo_name}
                </a>
            </div>
            <button
                onClick={e => deleteRepo(bookmark.id, e)}
                className="bg-purple-800 hover:bg-purple-900 font-semibold text-white h-10 py-2 px-4 rounded"
            >
                Delete
            </button>
        </div>
    )
}

export default Bookmark;
