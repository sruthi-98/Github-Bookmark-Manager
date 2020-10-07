import React from 'react';
import Reducer from '../Reducer';

const bookmark = {
    id: 1,
    repo_name: 'Bookmark-Manager',
    title: 'Manager',
    url: 'https://bookmark.manager.com'
};

describe('Reducer actions', () => {
    test('Tests add bookmark action', () => {
        const state = { bookmark: [] };
        const newState = Reducer(state, {
            type: 'ADD_BOOKMARK',
            item: bookmark 
        });
        expect(newState).toEqual({ bookmark: [bookmark]});
    })

    test('Tests delete bookmark action', () => {
        const state = { bookmark: [bookmark] }
        const newState = Reducer(state, {
            type: 'DELETE_BOOKMARK',
            id: 1
        });
        expect(newState).toEqual({ bookmark: [] })
    })
})