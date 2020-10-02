import React, { useState } from 'react';
import { useBookmarkValue } from '../BookmarkContext';

function AddTitle({ repo }) {
    const [title, setTitle] = useState('');

    const [{ bookmark }, dispatch] = useBookmarkValue();
    
    const addRepo = (repo) => {
        dispatch({
            type: 'ADD_BOOKMARK',
            item: {
                repo_name: repo.name,
                title: title,
                url: repo.html_url
            }
        });
    }

    return (
        <div>
            <div>
                <p>Enter a title:</p>
                <input 
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <button  onClick={e => addRepo(repo, e)}>Save</button>
            </div>
        </div>
    )
}

export default AddTitle;
