export const initialState = {
    bookmark: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOKMARK':
            return {
                ...state,
                bookmark: [...state.bookmark, action.item]
            };
    
        default:
            return state;
    }
}

export default reducer;