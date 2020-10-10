import React from 'react';
import { mount } from 'enzyme';
import Bookmark from '../components/Bookmark';

describe('Bookmark Component', () => {
    test('Check delete button click calls the onClick handler', () => {
        const onClickHandler = jest.fn();
        const wrapper = mount(<Bookmark />);
        const button = wrapper.find('button');
        button.setProps({
            onClick: onClickHandler
        });
        button.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    })
})