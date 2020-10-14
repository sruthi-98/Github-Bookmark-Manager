import React from 'react';
import { useBookmarkValue } from '../BookmarkContext';
import DeleteRepoButton from './DeleteRepoButton';

function Bookmark({ bookmark }) {
    const [, dispatch] = useBookmarkValue();

    const deleteRepo = (id) => {
        dispatch({
            type: 'DELETE_BOOKMARK',
            id: id
        });
    }

    return (
        <div className="bg-white border border-solid border-gray-400 shadow-md p-5 m-5 rounded">
            {bookmark.title !== '' && <p className="block text-xl text-orange-800 ml-2 font-black">{bookmark.title}</p>}
            <div className="block md:flex justify-between items-center">
            <div className="flex flex-col p-2">
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                    <strong>{bookmark.repo_name}</strong>
                </a>
                {bookmark.desc && <p className="pt-1 pr-2 pb-2 text-sm text-gray-800">{bookmark.desc}</p>}
            </div>
            <DeleteRepoButton deleteRepo={deleteRepo} id={bookmark.id} />
        </div>
        </div>
    )
}

export default Bookmark;
