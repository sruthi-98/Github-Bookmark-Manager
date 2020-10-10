import React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
    test('Check if header component is rendered correctly', () => {
        const wrapper = mount(<Header />);
    })
})