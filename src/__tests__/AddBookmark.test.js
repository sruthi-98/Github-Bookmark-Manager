import React from 'react';
import { mount } from 'enzyme';
import AddBookmark from '../components/AddBookmark';

describe('Add Bookmark', () => {
    test('Check if AddBookmark component is rendered correctly', () => {
        const wrapper = mount(<AddBookmark />);
    })
})