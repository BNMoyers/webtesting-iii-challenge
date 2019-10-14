
 
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test("defaults to `unlocked` and `open`", () =>{
    const { getByText } = render(<Controls />);
    getByText(/Lock/i);
    getByText(/Close/i);
}
)

test('open/close button disabled if locked', () =>{
    const lockedMock = true;
    const toggleClosedMock = jest.fn();
    const { getByText } = render(
        <Controls locked={lockedMock} toggleClosed={toggleClosedMock} />
    );
    fireEvent.click(getByText(/Close Gate/i));
    expect(toggleClosedMock).toHaveBeenCalledTimes(0)
})

test('lock/unlock button disabled if open', () =>{
    const closedMock = false;
    const toggleLockedMock = jest.fn();
    const { getByText } = render(
        <Controls closed={closedMock} toggleLocked={toggleLockedMock} />
    );
    fireEvent.click(getByText(/Lock Gate/i));
    expect(toggleLockedMock).toHaveBeenCalledTimes(0)
})
