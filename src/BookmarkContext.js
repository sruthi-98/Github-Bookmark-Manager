import React, { createContext, useContext, useReducer } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ reducer, initialState, children }) => (
    <BookmarkContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </BookmarkContext.Provider>
);

export const useBookmarkValue = () => useContext(BookmarkContext);

