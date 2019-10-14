
 
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

test("defaults to `unlocked` and `open`", () =>{
    const { getByText } = render(<Controls />);
    getByText(/Lock/i);
    getByText(/Close/i);
}
)

