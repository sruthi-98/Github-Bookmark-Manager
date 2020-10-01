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
        <div className="repo">
            <p>{repo.name}</p>
            <button onClick={e => addRepo(repo, e)}>Add</button>
        </div>
    )
}

export default Repo;
