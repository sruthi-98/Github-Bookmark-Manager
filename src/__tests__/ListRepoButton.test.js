import React, { useState } from 'react';
import { mount } from 'enzyme';
import ListRepoButton from '../components/ListRepoButton';

// Mock for useState
jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn()
}));

const setState = jest.fn((state, value) => state = value);
useState.mockImplementation(state => [state, setState]);

describe('List Repo Button', () => {
    test('Check if click handler is called on click', () => {
        const clickHandlerMock = jest.fn();
        const wrapper = mount(<ListRepoButton clickHandler={clickHandlerMock} clicked={false} login='User-123' />);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(clickHandlerMock).toHaveBeenCalledTimes(1);
    })

    test('Button text should contain View, when clicked = false', () => {
        const clickHandlerMock = jest.fn();
        const wrapper = mount(<ListRepoButton clickHandler={clickHandlerMock} clicked={false} login='User-123' />);
        const button = wrapper.find('button');
        expect(button.props().children).toContain('View');
    })

    test('Button text should contain Hide, when clicked = true', () => {
        const clickHandlerMock = jest.fn();
        const wrapper = mount(<ListRepoButton clickHandler={clickHandlerMock} clicked={true} login='User-123' />);
        const button = wrapper.find('button');
        expect(button.props().children).toContain('Hide');
    })
})