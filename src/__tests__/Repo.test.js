import React from 'react';
import { mount } from 'enzyme';
import { BookmarkProvider } from '../BookmarkContext';
import reducer, { initialState } from '../Reducer';
import Repo from '../components/Repo';

const repo = {
        id: 123,
        name: "repo-123",
        html_url: "https://repo-123.com"
    }

describe('Repo component', () => {
    test('Check if repo component is rendered correctly', () => {
        const wrapper = mount(
            <BookmarkProvider reducer={reducer} initialState={initialState}>
                <Repo repo={repo} />
            </BookmarkProvider>
        );
    })
})