import React from 'react';
import { mount } from 'enzyme';
import { BookmarkProvider } from '../BookmarkContext';
import reducer, { initialState } from '../Reducer';
import BookmarkList from '../components/BookmarkList';

const bookmarks = [
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

initialState.bookmarks = bookmarks;

describe('Bookmarks component', () => {
    test('Check if bookmarks are rendered correctly', () => {
        const wrapper = mount(
            <BookmarkProvider reducer={reducer} initialState={initialState}>
                <BookmarkList />
            </BookmarkProvider>
        );
        const bookmarkList = wrapper.find('Bookmark');
        expect(bookmarkList).toHaveLength(initialState.bookmarks.length);
    })
})