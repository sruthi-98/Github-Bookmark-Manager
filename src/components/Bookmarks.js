import React from 'react';
import { useBookmarkValue } from '../BookmarkContext';

function Bookmarks() {
    const [{ bookmark }, dispatch] = useBookmarkValue();

    const deleteRepo = (id) => {
        dispatch({
            type: 'DELETE_BOOKMARK',
            id: id
        });
    }
    return (
        <div>
            {bookmark.length === 0 ?
                <p className="text-xl p-2 mt-4">No bookmarks added !!!!</p> :
                bookmark.map((item, i) => (
                    <div  key={i} className="flex justify-between items-center bg-white border border-solid border-gray-400 shadow-md p-5 m-5 rounded">
                        <div className="flex flex-col">
                            {item.title !== '' && <p><strong>Title: </strong>{item.title}</p>}
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <strong>Repository: </strong>{item.repo_name}
                            </a>
                        </div>
                        <button
                            onClick={e => deleteRepo(item.id, e)}
                            className="bg-purple-800 hover:bg-purple-900 font-semibold text-white h-10 py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
            ))}
        </div>
    )
}

export default Bookmarks;
