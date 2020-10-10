import React from 'react';
import { mount } from 'enzyme';
import Result from '../components/Result';

const repoResult = {
    data: { items: [
            {
                id: 123,
                name: "repo-123",
                html_url: "https://repo-123.com"
            },
            {
                id: 1234,
                name: "repo-1234",
                html_url: "https://repo-1234.com"
            }
    ]}}

describe('Result component', () => {
    test('Check if results of type repo are rendered properly', () => {
        const wrapper = mount(<Result result={repoResult} searchType='repo' />);
        expect(wrapper.find('Repo').length).toEqual(repoResult.length);
    })
})