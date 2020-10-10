import React from 'react';
import { mount } from 'enzyme';
import PageButtons from '../components/PageButtons';

describe('PageButtons Component', () => {
    test('Check if page button click renders onClick handler', () => {
        const prevPageMock = jest.fn();
        const nextPageMock = jest.fn();
        const wrapper = mount(
            <PageButtons pageNumber={2} pageLimit={5} prevPage={prevPageMock} nextPage={nextPageMock} />
        );

        const prevButton = wrapper.find('button#prev');
        const nextButton = wrapper.find('button#next');
        prevButton.simulate('click');
        nextButton.simulate('click');
        nextButton.simulate('click');
        expect(prevPageMock).toHaveBeenCalledTimes(1);
        expect(nextPageMock).toHaveBeenCalledTimes(2);
    })
})