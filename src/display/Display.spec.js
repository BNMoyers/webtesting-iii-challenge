import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';
test("displays if gate is open/closed locked/unlocked", () =>{
    const { getByText } = render(<Display />);
    getByText(/Unlocked/i);
    getByText(/Open/i);
}
);

test("displays 'Closed' if the closed prop is true", () =>{
    const closedMock = true;
    const { getByText } = render(
        <Display closed={closedMock} />
    );
    (getByText(/Closed/i));
});

test("displays 'Open' if the closed prop is false", () =>{
    const closedMock = false;
    const { getByText } = render(
        <Display closed={closedMock} />
    );
    (getByText(/Open/i));
});

test("uses 'red-led' class when locked or closed", () => {
    const closedMock = true;
    const lockedMock = true;

    const { getByText } = render(
        <Display closed={closedMock} locked={lockedMock} />
    );
      const lock = getByText(/locked/i);
    expect(lock.classList.contains('red-led')).toBe(true);  
})

test("uses 'green-led' class when unlocked or opened", () => {
    const closedMock = false;
    const lockedMock = false;

    const { getByText } = render(
        <Display closed={closedMock} locked={lockedMock} />
    );
      const lock = getByText(/unlocked/i);
    expect(lock.classList.contains('green-led')).toBe(true);  
})

