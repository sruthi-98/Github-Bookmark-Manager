import Reducer from '../Reducer';

const oneBookmark = {
    id: 1,
    repo_name: 'Bookmark-Manager',
    title: 'Manager',
    url: 'https://bookmark.manager.com'
};

describe('Reducer actions', () => {
    test('Tests add bookmark action', () => {
        const state = { bookmarks: [] };
        const newState = Reducer(state, {
            type: 'ADD_BOOKMARK',
            item: oneBookmark 
        });
        expect(newState).toEqual({ bookmarks: [oneBookmark] });
    })

    test('Tests delete bookmark action', () => {
        const state = { bookmarks: [oneBookmark] }
        const newState = Reducer(state, {
            type: 'DELETE_BOOKMARK',
            id: 1
        });
        expect(newState).toEqual({ bookmarks: [] })
    })
})