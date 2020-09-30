import React from 'react';
import { useHistory } from 'react-router-dom';

function Manager() {
    const history = useHistory();

    return (
        <div className="manager">
            <h5>Your Bookmarks</h5>

            <button className="manager__addButton" onClick={() => history.push('/search')}>
                Add new bookmark
            </button>
        </div>
    )
}

export default Manager;
