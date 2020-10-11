import React from 'react';
import { mount } from 'enzyme';
import Search from '../components/Search';

describe('Search component', () => {
    test('Check if the search and the sub components are rendered', () => {
        const wrapper = mount(<Search />);
        expect(wrapper.find('SearchBar').length).toEqual(1);
        expect(wrapper.find('SearchDropdown').length).toEqual(1);
        expect(wrapper.find('SearchButton').length).toEqual(1);
    })
})