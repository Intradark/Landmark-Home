// Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the correct children', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);

    // Assert that the button is in the document and contains the correct text
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick when the button is clicked', () => {
    const handleClick = jest.fn(); // Mock function for the onClick handler
    render(<Button onClick={handleClick}>Click Me</Button>);

    // Get the button element
    const buttonElement = screen.getByText(/Click Me/i);

    // Simulate a click event
    fireEvent.click(buttonElement);

    // Assert that the mock function was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
