import React from 'react';
import { mount } from 'enzyme';
import AddRepoButton from '../components/AddRepoButton';

const bookmarks = [
    {
        id: 1,
        repo_name: 'Bookmark-Manager-1',
        title: 'Manager-1',
        url: 'https://bookmark.manager.1.com'
    },
    {
        id: 2,
        repo_name: 'Bookmark-Manager-2',
        title: 'Manager-2',
        url: 'https://bookmark.manager.2.com'
    }
];

const onClickHandler = jest.fn();
const isAdded = jest.fn(
    id => bookmarks.some(item => item.id === id)
);

describe('Check if click handler is called for Add Repo Button', () => {
    test('Button displays Add when bookmark is not added already', () => {
        const wrapper = mount(
            <AddRepoButton id={1234} clickHandler={onClickHandler} isAdded={isAdded} />
        );
        const button = wrapper.find('button');
        button.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
        expect(button.props().children).toContain('Add');
    })

    test('Button displays Added when bookmark is added already', () => {
        const wrapper = mount(
            <AddRepoButton id={1} clickHandler={onClickHandler} isAdded={isAdded} />
        );
        const button = wrapper.find('button');
        button.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
        expect(button.props().children).toContain('Added');
    })
})