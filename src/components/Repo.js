import React from 'react';
import { useBookmarkValue } from '../BookmarkContext';

function Repo({ repo }) {
    const [{ bookmark }, dispatch] = useBookmarkValue();
    
    const addRepo = (repo) => {
        dispatch({
            type: 'ADD_BOOKMARK',
            item: {
                repo_name: repo.name,
                url: repo.html_url
            }
        });
    }

    return (
        <div className="flex justify-between items-center border border-solid border-gray-400 shadow-lg p-5 m-5 rounded">
            <p className="p-2">
                <strong>Repository: </strong>{repo.name}
            </p>
            <button 
                onClick={e => addRepo(repo, e)}
                className="bg-purple-800 hover:bg-purple-900 font-semibold text-white h-10 py-2 px-4 rounded"
            >
                Add
            </button>
        </div>
    )
}

export default Repo;
