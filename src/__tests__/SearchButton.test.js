import React from 'react';
import { mount } from 'enzyme';
import SearchButton from '../components/SearchButton';

// Create mock of click handler passed to SearchButton component
const mockClickHandler = jest.fn();

describe('Search button', () => {
    test('Checking if the state is updated on button click', () => {
        const wrapper = mount(<SearchButton clickHandler={mockClickHandler}/>);
        wrapper.find('button').simulate('click');

        // Check if the click handler is called
        expect(mockClickHandler.mock.calls.length).toEqual(1);     
    });
})

