import React from 'react';
import { mount } from 'enzyme';
import AddRepoButton from '../components/AddRepoButton';

describe('Add Repo button', () => {
    test('Check if button click renders click handler', () => {
        const onClickHandler = jest.fn();
        const isAdded = jest.fn();
        const wrapper = mount(
            <AddRepoButton id={1234} clickHandler={onClickHandler} isAdded={isAdded} />
        );
        const button = wrapper.find('button');
        button.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    })
})