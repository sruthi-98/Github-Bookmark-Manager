import React from 'react';
import { mount } from 'enzyme';
import SearchDropdown from '../components/SearchDropdown';

describe('Search Dropdown', () => {
    test('Check there are only two options (User and Repo) in the dropdown', () => {
        const wrapper = mount(<SearchDropdown />);
        const options = wrapper.find('option');
        expect(options).toHaveLength(2);

        const option_1 = options.at(0).instance();
        const option_2 = options.at(1).instance();
        expect(option_1.value).toEqual('users');
        expect(option_1.text).toEqual('in Users');
        expect(option_2.value).toEqual('repo');
        expect(option_2.text).toEqual('in Repositories');
    })
})