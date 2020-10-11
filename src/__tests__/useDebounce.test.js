import React, { useState } from 'react';
// import { mount } from 'enzyme';
import useDebounce from '../useDebounce';

// Mock for useState
jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn()
}));

const setState = jest.fn();
useState.mockImplementation(state => [state, setState]);

// Mock for useEffect
const useEffect = jest.spyOn(React, "useEffect");
const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

test('useDebounce hook', () => {
    mockUseEffect();
    const debouncedValue = useDebounce('hello', 1000);
    expect(debouncedValue).toBe('hello');
})
