import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
    test('Check if header component is rendered correctly', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
    })
})