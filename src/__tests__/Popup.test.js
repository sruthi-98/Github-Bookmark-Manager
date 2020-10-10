import React, { useRef } from 'react';
import { mount } from 'enzyme';
import Popup from '../components/Popup';

// Mocking useRef hook
jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mockUseRef = jest.fn();
    return {
      ...originReact,
      useRef: mockUseRef,
    };
});

describe('Popup Component', () => {
    test('Check if change handler is called', () => {
        const changeHandlerMock = jest.fn();
        const wrapper = mount(<Popup changeHandler={changeHandlerMock} />);
        const titleBar = wrapper.find('input');
        titleBar.simulate('change');
        expect(changeHandlerMock).toHaveBeenCalledTimes(1);
    })

    test('Checking if the title is captured correctly by reference', () => {
        const mockRef = { current: { value: '' } };
        useRef.mockReturnValueOnce(mockRef);
        const wrapper = mount(<Popup titleRef={mockRef} />);
        const searchBar = wrapper.find('input');
        searchBar.instance().value = 'sample title';
        expect(mockRef.current.value).toEqual('sample title');
        expect(mockRef.current.value).not.toEqual('popup');
    });
})