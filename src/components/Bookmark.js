import React from 'react';
import { useBookmarkValue } from '../BookmarkContext';
import DeleteButton from './DeleteButton';

function Bookmark({ bookmark }) {
    const [, dispatch] = useBookmarkValue();

    const deleteRepo = (id) => {
        dispatch({
            type: 'DELETE_BOOKMARK',
            id: id
        });
    }

    return (
        <div className="flex justify-between items-center bg-white border border-solid border-gray-400 shadow-md p-5 m-5 rounded">
            <div className="flex flex-col">
                {bookmark.title !== '' && <p><strong>Title: </strong>{bookmark.title}</p>}
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                    <strong>Repository: </strong>{bookmark.repo_name}
                </a>
            </div>
            <DeleteButton deleteRepo={deleteRepo} id={bookmark.id} />
        </div>
    )
}

export default Bookmark;
