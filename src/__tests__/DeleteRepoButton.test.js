import React from 'react';
import { mount } from 'enzyme';
import DeleteRepoButton from '../components/DeleteRepoButton';

describe('Bookmark Component', () => {
    test('Check delete button click calls the onClick handler', () => {
        const onClickHandler = jest.fn();
        const wrapper = mount(
            <DeleteRepoButton deleteRepo={onClickHandler} id={1234} />
        );
        const button = wrapper.find('button');
        button.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    })
})