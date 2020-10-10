import React from 'react';
import { mount } from 'enzyme';
import BookmarkList from '../components/BookmarkList';
import Bookmark from '../components/Bookmark';

const bookmark = [
    {
        id: 1,
        repo_name: 'Bookmark-Manager-1',
        title: 'Manager-1',
        url: 'https://bookmark.manager.1.com'
    },
    {
        id: 2,
        repo_name: 'Bookmark-Manager-2',
        title: 'Manager-2',
        url: 'https://bookmark.manager.2.com'
    }
];

describe('Bookmarks component', () => {
    test('Check if bookmarks are rendered correctly', () => {
        mount(<Bookmark bookmark={bookmark[0]} />);
        mount(<Bookmark bookmark={bookmark[1]} />);
        const wrapper = mount(<BookmarkList />);
        const bookmarks = wrapper.find(Bookmark);
        expect(bookmarks).toHaveLength(bookmark.length);
    })
})