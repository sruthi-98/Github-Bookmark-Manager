import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
    test('Check if header component is rendered correctly and links to the Home page', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        const link = wrapper.find('Link');
        expect(link.props()).toHaveProperty('to', '/');
    })
})