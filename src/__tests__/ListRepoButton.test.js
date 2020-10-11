import React from 'react';
import { mount } from 'enzyme';
import ListRepoButton from '../components/ListRepoButton';

describe('List Repo Button', () => {
    test('Check if click handler is called on click', () => {
        const clickHandlerMock = jest.fn();
        const wrapper = mount(<ListRepoButton clickHandler={clickHandlerMock} clicked={false} login='User-123' />);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(clickHandlerMock).toHaveBeenCalledTimes(1);
    })
})