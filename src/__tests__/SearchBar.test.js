import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../components/SearchBar';

describe('Search bar', () => {
    test('Checking if the onChange handler is called', () => {
        const onChangeMock = jest.fn();
        const wrapper = mount(<SearchBar onChange={onChangeMock} />);
        
        const searchBar = wrapper.find('input');
        searchBar.simulate('change', {target: {value: 'search query'}});
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
})