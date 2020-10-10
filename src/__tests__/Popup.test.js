import React from 'react';
import { mount } from 'enzyme';
import Popup from '../components/Popup';

describe('Popup Component', () => {
    test('Check if change handler is called', () => {
        const changeHandlerMock = jest.fn();
        const wrapper = mount(<Popup changeHandler={changeHandlerMock} />);
        const titleBar = wrapper.find('input');
        titleBar.simulate('change');
        expect(changeHandlerMock).toHaveBeenCalledTimes(1);
    })
})