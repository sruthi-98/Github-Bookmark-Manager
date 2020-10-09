import React from 'react';
import AddBookmark from './AddBookmark';
import BookmarkList from './BookmarkList';

function Manager() {
    return (
        <div className="h-auto m-10">
            <h5 className="text-2xl pb-2 border-b border-solid border-gray-500">
                Your Bookmark List
            </h5>
            <BookmarkList />
            <AddBookmark />
        </div>
    )
}

export default Manager;
