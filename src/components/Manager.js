import React from 'react';
import { useHistory } from 'react-router-dom';
import { useBookmarkValue } from '../BookmarkContext';

function Manager() {
    const history = useHistory();
    const [{ bookmark }, dispatch] = useBookmarkValue();

    return (
        <div className="manager">
            <h5>Your Bookmarks</h5>
            <div className="manager__list">
                {
                    bookmark.length === 0 ?
                    <p>No bookmarks added</p> :
                    bookmark.map(item => (
                        <p><a href={item.url} target="_blank" rel="noopener noreferrer">{item.repo_name}</a></p>
                    ))
                }
            </div>
            <button className="manager__addButton" onClick={() => history.push('/search')}>
                Add new bookmark
            </button>
        </div>
    )
}

export default Manager;
