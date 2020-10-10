import React from 'react';
import { mount } from 'enzyme';
import { BookmarkProvider } from '../BookmarkContext';
import reducer, { initialState } from '../Reducer';
import Bookmark from '../components/Bookmark';

describe('Bookmark Component', () => {
    test('Check delete button click calls the onClick handler', () => {
        const onClickHandler = jest.fn();
        const wrapper = mount(
            <BookmarkProvider reducer={reducer} initialState={initialState}>
                <Bookmark />
            </BookmarkProvider>
        );
        const button = wrapper.find('button');
        button.setProps({
            onClick: onClickHandler
        });
        button.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    })
})