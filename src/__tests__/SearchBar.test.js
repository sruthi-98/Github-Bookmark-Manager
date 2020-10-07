import React, { useRef } from 'react';
import { mount } from 'enzyme';
import SearchBar from '../components/SearchBar';

// Mocking useRef hook
jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mockUseRef = jest.fn();
    return {
      ...originReact,
      useRef: mockUseRef,
    };
});


describe('Search bar', () => {
    test('Checking if the search query is captured correctly', () => {
        const mockRef = { current: { value: '' } };
        useRef.mockReturnValueOnce(mockRef);
        const wrapper = mount(<SearchBar searchRef={mockRef} />);
        const searchBar = wrapper.find('input');
        searchBar.instance().value = 'search query';
        expect(mockRef.current.value).toEqual('search query');
        expect(mockRef.current.value).not.toEqual('search');
    });
})