import React from 'react';
import { useBookmarkValue } from '../BookmarkContext';
import Bookmark from './Bookmark';

function BookmarkList() {
    const [{ bookmark }, ] = useBookmarkValue();

    return (
        <div>
            {bookmark.length === 0 ?
                <p className="text-xl p-2 mt-4">No bookmarks added !!!!</p> :
                bookmark.map((item, i) => <Bookmark bookmark={item} id={i} />)}
        </div>
    )
}

export default BookmarkList;
