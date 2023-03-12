import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('вызывает onClick при клике', () => {
    const onClick = jest.fn();
    const view = render(<Button onClick={onClick}>Click me</Button>);
    const button = view.getByText('Click me');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled(1);
  });
});