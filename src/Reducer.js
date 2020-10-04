export const initialState = {
    bookmark: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOKMARK':
            return {
                ...state,
                bookmark: [...state.bookmark, action.item]
            }

        case 'DELETE_BOOKMARK':
            const index = state.bookmark.findIndex(
                item => item.id === action.id
            );
            let newBookmark = [...state.bookmark];
            if(index >= 0){
                newBookmark.splice(index, 1);
            }

            return {
                ...state,
                bookmark: newBookmark
            }

        default:
            return state;
    }
}

export default reducer;