export const initialState = {
    bookmarks: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOKMARK':
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.item]
            }

        case 'DELETE_BOOKMARK':
            const index = state.bookmarks.findIndex(
                item => item.id === action.id
            );
            let newBookmarks = [...state.bookmarks];
            if(index >= 0){
                newBookmarks.splice(index, 1);
            }

            return {
                ...state,
                bookmarks: newBookmarks
            }

        default:
            return state;
    }
}

export default reducer;