import React from 'react';
import { mount } from 'enzyme';
import User from '../components/User';

const user = {
    id: 123,
    login: "user-123",
}

describe('User component', () => {
    test('', () => {
        const wrapper = mount(<User user={user} />);
        
    })
})