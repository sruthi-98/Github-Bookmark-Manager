import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import Manager from '../components/Manager';
import Search from '../components/Search';

describe('Checking routing', () => {
    test('/ path should render Header and Manager component', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Manager)).toHaveLength(1);
    });

    test('/search path should render Header and Search component', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search' ]}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Search)).toHaveLength(1);
    });
})

