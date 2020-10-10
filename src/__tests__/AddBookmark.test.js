import React from 'react';
import { mount } from 'enzyme';
import AddBookmark from '../components/AddBookmark';

// Mock for useHistory
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Add Bookmark', () => {
    test('Check if AddBookmark component is rendered correctly and redirects to /search when clicked', () => {
        const wrapper = mount(<AddBookmark />);
        wrapper.find('button').simulate('click');
        expect(mockHistoryPush).toHaveBeenCalledWith('/search');
    })
})